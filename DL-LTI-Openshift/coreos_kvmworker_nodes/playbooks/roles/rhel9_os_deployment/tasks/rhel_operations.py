# (C) Copyright (2018,2021) Hewlett Packard Enterprise Development LP
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.

from subprocess import CalledProcessError
import shutil
import subprocess
import threading
from redfish_object import RedfishObject
from time import sleep
import requests
import os
import json
from datetime import datetime
from datetime import timedelta

from ilo_operations import *
from image_operations import *

def create_custom_iso_image_redhat(os_type, server, config, kickstart_file):
    """This is the primary function is to create a custom Red Hat Enterprise Linux ISO image for each of the server. 
    It triggers the functions to create custom kickstart files, mounts the RHEL OS image to the installer machine, 
    copies the contents, updates the custom kickstart file location and rebundles it into a custom RHEL image for each of the server. 
    
    Arguments:
        os_type {string}                      -- Type of operating system (currently supports rhel9)
        server {string}                       -- Custom configurations for a particular server as per the input_files/server_details.json
        config {string}                       -- OneView, web server and OS details as per the input_files/config.json
        kickstart_file {string}               -- Path of the base kickstart file for ESXi operating system

    Returns:
        Boolean -- returns True upon successful creation of custom os image, return False on failure of creation of custom os image
    """
    if os_type == "rhel":
        rhel_iso_filename = config["OS_image_name"]
        if not os.path.isfile(kickstart_file):
            print("Kickstart file is not present for RHEL installation")
            return False   	
    else:
        print("Installation OS type {} is not supported".format(os_type))
        return False
    destination_folder = config["HTTP_file_path"]

    print("Creating modified installation file for RHEL Installation")
    image_url = config["HTTP_server_base_url"] + rhel_iso_filename
    file_presence = is_iso_file_present(image_url)
    if not file_presence:
        print("ISO file is not present in the given http location. Please check the http location and then try again.")
        return False

    val = is_iso_image(rhel_iso_filename)
    if val:
        if os_type == "rhel":
            base_iso_image_path = config["HTTP_file_path"]
            filepath = base_iso_image_path + rhel_iso_filename
            server_serial_number = server["Server_serial_number"]

            temppath = "/tmp/" + "redhatmount_" + server_serial_number + "/"
            mount_path = "/tmp/" + "redhatorig_" + server_serial_number

            kickstart_filepath = temppath + "ks.cfg"

            mount_proc_id = mount_iso_image(filepath, mount_path)
            if mount_proc_id == 0:
                print("Successfully mounted the image {}".format(rhel_iso_filename))
            else:
                print("Attempting to unmount the previously mounted image")
                umount_id = unmount_iso_image(mount_path)
                mount_proc_id = mount_iso_image(filepath, mount_path)
                if mount_proc_id == 0:
                    print("Successfully unmounted the previously mounted image")                
                else:
                    print("Failed to mount the image {}".format(rhel_iso_filename))
                    return False

            copy_iso_contents(mount_path, temppath)
            kickstart_status  = create_kickstart_file_for_redhat(kickstart_filepath, kickstart_file, server)
            
            if(kickstart_status and os.path.isfile(kickstart_filepath)):
                redhat_label = update_ks_file_location_redhat_iso_efi(temppath + "EFI/BOOT/")
                redhat_label = redhat_label.replace("\\x20"," ")
                print(redhat_label)
                update_ks_file_location_redhat_iso_legacy(temppath + "isolinux/")
                
                destination_filename = get_custom_image_name(os_type, server_serial_number) 
                
                recreate_iso_proc_id = rebuild_iso_redhat_image(temppath, destination_folder, destination_filename, redhat_label)
                if recreate_iso_proc_id.returncode == 0:
                    print("Successfully re-created the iso image for server {} after modifying the content".format(server_serial_number))
                    status = True
                else:
                    print("Error in recreating the iso image for server {} after modifying the content".format(server_serial_number))
                    status = False
                                
                umount_proc_id = unmount_iso_image(mount_path)
                if umount_proc_id == 0:
                    print("Successfully unmounted the iso image")
                else:
                    print("Error in umounting the iso image")                

                delete_temp_folder(temppath)
                return status
            else:
                print("Error in fetching custom kickstart file {}".format(kickstart_file))
                return status
    else:
        print("File type is not supported")
        return False
    return True


def create_kickstart_file_for_redhat(kickstart_filepath, kickstart_file, server_data):
    """This function is to create custom kickstart file for Red Hat Enterprise Linux nodes
    
    Arguments:
        filepath {string}        -- custom kickstart file path
        kickstart_file {string}  -- base kickstart file path
        server_data {dictionary} -- Custom configurations for a particular server as per the input_files/server_details.json
    """
    try:
        with open(kickstart_file, 'r') as firstfile, open(kickstart_filepath, 'w') as secondfile:
           for line in firstfile:
             # append content to second file
               secondfile.write(line.format(server = server_data))
        
       # with open(kickstart_filepath, "w") as file_write:
            #with open(kickstart_file, 'r') as ksfile:
        #     kickstart_file_contents_for_redhat = file_write.read()
        #     file_write.write(kickstart_file_contents_for_redhat.format(server = server_data))
        #file_write.close()
        print("Successfully created kickstart file for server {} ".format(server_data["Server_serial_number"]) )
        return True
    except IOError as ioer:
        print("I/O error occurred while creating custom kickstart file {}".format(ioer))
        return False
    except Exception as er:
        print("Error occurred in creating custom kickstart file {}".format(er))
        return False


def update_ks_file_location_redhat_iso_efi(temppath):
    """This function is to update the kickstart file location in the /EFI/BOOT/grub.cfg file within the RHEL OS ISO file.
    
    Arguments:
        temppath {string}             -- Path to the custom ISO image file
        server_serial_number {string} -- server serial number
        http_url {string}             -- HTTP server base URL
    """
    boot_filename = temppath + "grub.cfg"
    new_data = ""
    redhat_label = ""
    try:
        with open(boot_filename, "r") as file_read:
            for line in file_read.readlines():
                if "linuxefi" in line:
                    str = line[line.index("LABEL=")+6:]
                    redhat_label = str[:str.index(" ")]
                    line = line.replace("/images/pxeboot/vmlinuz", "/images/pxeboot/vmlinuz inst.ks=cdrom:/ks.cfg")
                if "default=" in line:
                    line = line.replace("1", "0")
                if "set timeout" in line:
                    line = line.replace("60", "6")
                new_data = new_data + line
        file_read.close()
        with open(boot_filename, "w") as file_write:
            file_write.write(new_data)
        file_write.close()
        return redhat_label
    except IOError as ioer:
        print("I/O error occurred while modifying the iso img file {}".format(ioer))
    except Exception as er:
        print("Error occurred in modifying the image {}".format(er))


def update_ks_file_location_redhat_iso_legacy(temppath):
    """This function is to update the kickstart file location in the /isolinux/isolinux.cfg file within the RHEL OS ISO file.
    
    Arguments:
        temppath {string}             -- Path to the custom ISO image file
        server_serial_number {string} -- Server serial number
        http_url {string}             -- HTTP server base URL
        os_type {string}              -- Type of the OS
    """
    boot_filename = temppath + "isolinux.cfg"
    new_data = ""
    
    try:
        with open(boot_filename, "r") as file_read:
            for line in file_read.readlines():
                if "initrd=initrd.img" in line:
                    line = line.replace("append initrd=initrd.img", "append initrd=initrd.img inst.ks=cdrom:/ks.cfg")
                if "default vesamenu.c32" in line:
                    line = line.replace("default vesamenu.c32", "default linux")
                new_data = new_data + line
        file_read.close()
        with open(boot_filename, "w") as file_write:
            file_write.write(new_data)
        file_write.close()
    except IOError as ioer:
        print("I/O error occurred while modifying the iso img file: {}".format(ioer))
    except Exception as er:
        print("Error occurred in modifying the image {}".format(er))

def rebuild_iso_redhat_image(temppath, custom_iso_path, iso_filename, redhat_label):
    """
    This function is to rebuild an ISO image after customization

    Arguments:
        temppath {string}           -- Path to the custom ISO image contents which needs to rebuilt
        custom_iso_path {string}    -- Path to store the resultant ISO image
        iso_filename {string}       -- Name for the resultant ISO image
    """
    try:
        create_dir_exist(custom_iso_path)

        custom_iso = custom_iso_path + iso_filename
        args = ["mkisofs", "-untranslated-filenames", "-volid", redhat_label , "-J", "-joliet-long", "-rational-rock", "-translation-table", "-input-charset", "utf-8", "-b", "isolinux/isolinux.bin", "-c", "isolinux/boot.cat", "-no-emul-boot", "-boot-load-size", "4", "-boot-info-table", "-eltorito-alt-boot", "-e", "images/efiboot.img", "-no-emul-boot", "-o", custom_iso, "-graft-points", temppath]
        execute_linux_command(args)
        args = ["isohybrid","--uefi",custom_iso]
        proc = execute_linux_command(args)
        args = ["implantisomd5", custom_iso]
        proc = execute_linux_command(args)
        return proc
    except CalledProcessError as subprcer:
        print("Subprocess error occurred while rebuilding custom iso image {}".format(subprcer))
    except Exception as er:
        print("Error while rebuilding custom iso image {}".format(er))
