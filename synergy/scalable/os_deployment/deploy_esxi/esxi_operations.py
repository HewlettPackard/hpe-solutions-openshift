# (C) Copyright (2021) Hewlett Packard Enterprise Development LP
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


from image_operations import *
from subprocess import CalledProcessError
import subprocess

def create_custom_iso_image_esxi(os_type, server, config, base_kickstart_filepath):
    """This is the primary function is to create a custom ESXi ISO image for each of the server. 
    It triggers the functions to create custom kickstart files, mounts the ESXi OS image to the installer machine, 
    copies the contents, updates the custom kickstart file location and rebundles it into a custom ESXi image for each of the server.

    Arguments:
        os_type {string}                    -- Type of operating system (currently supports esxi67)
        server {dictionary}                 -- Custom configurations for a particular server as per the input_files/server_details.json
        config {dictionary}                 -- Web server and OS details as per the input_files/config.json
        base_kickstart_filepath {string}    -- Path of the base kickstart file for ESXi operating system

    Returns:
        Boolean -- returns True upon successful creation of custom os image, return False on failure of creation of custom os image 
    """
    try:
        base_iso_image_path = config["HTTP_file_path"]
        filename = config["OS_image_name"]
        server_serial_number = server["Server_serial_number"]

        filepath = base_iso_image_path + filename
        temppath = "/tmp/" + "esximount_" + server_serial_number + "/"
        destination_kickstart_filepath = temppath + "/" + "ks1.cfg"
        mount_path = "/tmp/" + "esxiorig_" + server_serial_number
        
        mount_proc_id = mount_iso_image(filepath, mount_path)
        if mount_proc_id == 0:
            print("Successfully mounted the image " + filename)
        else:
            print("Attempting to unmount the previously mounted image")
            umount_id = unmount_iso_image(mount_path)
            mount_proc_id = mount_iso_image(filepath, mount_path)
            if mount_proc_id == 0:
                print("successfully unmounted the previously mounted image")
            else:
                print("Failed to mount the image " + filename)
                return False  

        copy_iso_contents(mount_path, temppath)
        # Changing directory permissions
        os.system("sudo chmod a=rwx,o+t "+temppath)
        update_ks_file_location_esxi(temppath)
        update_ks_file_location_esxi(temppath + "efi/boot/")
        
        kickstart_status = create_kickstart_file_esxi(destination_kickstart_filepath, base_kickstart_filepath, server)
        
        if(kickstart_status and os.path.isfile(destination_kickstart_filepath)):
            destination_filename = get_custom_image_name(os_type, server_serial_number)
            destination_folder = config["HTTP_file_path"]
            recreate_iso_proc_id = rebuild_iso_image_esxi(temppath, destination_folder, destination_filename)
            if recreate_iso_proc_id.returncode == 0:
                print("Successfully re-created the iso image for server {} after modifying the content".format(server_serial_number))
                status = True
            else:
                print("Failed to re-create iso image for server {}".format(server_serial_number))
                status = False
            umount_proc_id = unmount_iso_image(mount_path)
            if umount_proc_id == 0:
                print("Successfully unmounted the iso image")
            move_temp_folder(temppath)
            return status
        else:
            print("Failed to fetch custom kickstart file for server {}".format(server_serial_number))
            return False
    except Exception as e:
        print("Failure: Error occured while creating custom iso image file {}".format(e))
        return False

def update_ks_file_location_esxi(temppath):
    """This function updates the kickstart file location in the boot configuration files within the ESXi ISO image

    Arguments:
        temppath {string} -- Path to the directory holding boot configuration file
    """
    try:
        boot_filename = temppath + "boot.cfg"
        os.system("sudo chmod 777 "+boot_filename)
        new_data = ""
        with open(boot_filename, "r") as file_read:
            for line in file_read.readlines():
                if "kernelopt" in line and "runweasel" in line:
                    line = line.replace("runweasel", "runweasel ks=cdrom:/KS1.CFG")
                    if "cdromBoot" in line:
                        line = line.replace("cdromBoot ", "")
                new_data = new_data + line
        file_read.close()
        with open(boot_filename, "w") as file_write:
            file_write.write(new_data)
        file_write.close()
    except IOError as ioer:
        print("Failure: I/O error occurred while updating the kickstart file location in the iso img file {}".format(ioer))
    except Exception as er:
        print("Failure: Error occurred while updating the kickstart file location in the iso img file {}".format(er))


def create_kickstart_file_esxi(filepath, base_kickstart_file, server_data):
    """This function is to create a kickstart file based on the configurations provided per server. 

    Arguments:
        filepath {string}               -- custom kickstart file path
        base_kickstart_file {string}    -- custom kickstart file path for ESXi 
        server_data {string}            -- custom configurations per server

    Returns:
        Boolean -- returns True upon successful creation of custom os image, return False on failure of creation of custom os image
    """
    try:
        with open(filepath, "w") as file_write:
            with open(base_kickstart_file, 'r') as ksfile:
                kickstart_file_contents = ksfile.read()
            file_write.write(kickstart_file_contents.format(server = server_data))
        file_write.close()
        print("Successfully created kickstart file for server {}".format(server_data["Server_serial_number"]))
        return True
    except IOError as ioer:
        print("Failure: I/O error occurred while creating the kickstart file for server {}".format(server_data["Server_serial_number"]))
        return False
    except Exception as er:
        print("Failure: Error occurred in creating the kickstart file {}".format(er))
        return False


def rebuild_iso_image_esxi(temppath, custom_iso_path, iso_filename):
    """This function is to rebuild the ESXi ISO image after the path to custom kickstart file has been updated

    Arguments:
        temppath {string}           -- Path to the custom ISO image contents which needs to rebuilt 
        custom_iso_path {string}    -- Path to store the resultant ISO image
        iso_filename {string}       -- Name for the resultant ISO image
    """
    try:
        create_dir_exist(custom_iso_path)

        custom_iso = custom_iso_path + iso_filename
        args = ["sudo", "genisoimage", "-relaxed-filename", "-J", "-R", "-o",
                custom_iso, "-b", "isolinux.bin", "-c", "boot.cat", "-no-emul-boot",
                "-boot-load-size", "4", "-boot-info-table", "-eltorito-alt-boot",
                "-e", "efiboot.img", "-no-emul-boot", temppath]

        proc = execute_linux_command(args)
        return proc
    except CalledProcessError as subprcer:
        print("Failure: Subprocess error occurred while rebuilding custom iso image {}".format(subprcer))
    except Exception as er:
        print("Failure: Error while rebuilding custom iso image {}".format(er))