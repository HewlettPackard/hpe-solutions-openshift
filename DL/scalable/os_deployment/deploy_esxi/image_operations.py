# (C) Copyright (2018,2020) Hewlett Packard Enterprise Development LP
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
from time import sleep
import requests
import os
import json
from datetime import datetime
from datetime import timedelta

def mount_iso_image(file_name, org_path):
    """This function is to mount the file to the desired path
    
    Arguments:
        file_name {string} -- name of the file to be mounted
        org_path {string}  -- path of the mount point
    """
    create_dir_exist(org_path)
    try:
        args = ["sudo", "mount", "-o", "loop", file_name, org_path]
        proc = execute_linux_command(args)
        return proc.returncode
    except CalledProcessError as subprcer:
        print("Failure: Subprocess error occurred while mounting iso image {}".format(subprcer))
        return 1
    except Exception as er:
        print("Failure: Error while mounting iso image {}".format(er))
        return 1


def copy_iso_contents(origpath, newpath):
    """This function is to copy the contents of the ISO image to the desired location
    
    Arguments:
        origpath {string} -- source path
        newpath {string}  -- destination path
    """
    try:
        if os.path.isdir(newpath):
            folder_name = (newpath.split('/'))[2]
            file_path= "files/"+folder_name
            if os.path.isdir(file_path):
                os.system("sudo rsync -a --remove-source-files "+newpath+" files/"+folder_name+"/")
                os.system("sudo find "+newpath+" -type d -empty -delete")
            else:
                os.system("sudo mv -f "+newpath+" files/")
        shutil.copytree(origpath, newpath)
    except Exception as e:
        print("Failure: Error occured while copying iso contents {}".format(e))


def unmount_iso_image(org_path):
    """This function is to unmount ISO fimage on the installer machine
    
    Arguments:
        org_path {string} -- path to the mount point 
    """
    try:
        args = ["sudo", "umount", org_path]
        proc = execute_linux_command(args)
        if proc.returncode == 0:
            shutil.rmtree(org_path)
        return proc.returncode
    except CalledProcessError as subprcer:
        print("Failure: Subprocess error occurred while unmounting iso image {}".format(subprcer))
        return 1
    except Exception as er:
        print("Failure: Error while unmounting iso image {}".format(er))
        return 1


def get_custom_image_url(http_url, os_type, server_serial_number):
    """This function is to generate URL for the custom OS ISO file based on the type of OS and server serial number
    
    Arguments:
        http_url {string}             -- HTTP server base URL
        os_type {string}              -- Type of the opertaing system 
        server_serial_number {string} -- Server serial number
    
    Returns:
        string -- custom ISO URL
    """
    return http_url + os_type + server_serial_number + ".iso"


def get_custom_image_path(http_path, os_type, server_serial_number):
    """This function is to generate path for the custom OS ISO file based on the type of OS and server serial number
    
    Arguments:
        http_path {string}            -- HTTP server base file path
        os_type {string}              -- Type of the opertaing system 
        server_serial_number {string} -- Server serial number
    
    Returns:
        string -- custom ISO path
    """
    return os.path.join(http_path, os_type + server_serial_number + ".iso")


def get_custom_image_name(os_type, server_serial_number):
    """This function is to generate name for the custom OS ISO file based on the type of OS and server serial number
    
    Arguments:
        os_type {string}              -- Type of the opertaing system 
        server_serial_number {string} -- Server serial number
    
    Returns:
        string -- custom ISO filename
    """
    return os_type + server_serial_number + ".iso"


def get_custom_kickstart_url(http_url, os_type, server_serial_number):
    """This function is to generate URL for the custom kickstart file based on the type of OS and server serial number
    
    Arguments:
        http_url {string}             -- HTTP server base URL
        os_type {string}              -- Type of the opertaing system 
        server_serial_number {string} -- Server serial number
    
    Returns:
        string -- custom kickstart URL
    """
    return http_url + os_type + server_serial_number + "_ks.cfg"


def get_custom_kickstart_path(http_path, os_type, server_serial_number):
    """This function is to generate path for the custom kickstart file based on the type of OS and server serial number
    
    Arguments:
        http_path {string}            -- HTTP server base file path
        os_type {string}              -- Type of the opertaing system
        server_serial_number {string} -- Server serial number
    
    Returns:
        string -- custom kickstart path
    """
    return os.path.join(http_path, os_type + server_serial_number + "_ks.cfg")


def get_custom_kickstart_name(os_type, server_serial_number):
    """This function is to generate a name for the custom kickstart file based on the type of OS and server serial number
    
    Arguments:
        os_type {string}              -- Type of the opertaing system - RHEL
        server_serial_number {string} -- Server serial number
    
    Returns:
        string -- custom kickstart filename
    """
    return os_type + server_serial_number + "_ks.cfg"


def create_dir_exist(dir_path):
    """This function is to create a folder if it doesn't already exist
    
    Arguments:
        dir_path {string} -- Path to a folder to be created
    """
    try:
        if not os.path.isdir(dir_path):
            os.makedirs(dir_path)
    except Exception as er:
        print("Failure: Error occurred while creating the dir {}".format(er))


def move_file(filepath):
    """This function is to move a file to temp folder
    
    Arguments:
        filepath {string} -- Path of a file to be moved
    """
    try:
        if os.path.exists(filepath):
            os.system("sudo mv -f  "+filepath+ " files/")
    except Exception as e:
        print("Failure: Error occured while moving the file ".format(e))

def move_on_exist_file(file_path):
    """This function is to move an existing file
    
    Arguments:
        file_path {string} -- Path of an existing file to be moved
    """
    try:
        print("Searching file {}".format(file_path))
        if os.path.isfile(file_path):
            move_file(file_path)
    except Exception as er:
        print("Failure: Error occurred while moving the file {} ".format(er))


def move_temp_folder(temppath):
    """
    This function is to move a folder
    Arguments:
        temppath {string} -- Path of the folder to be moved
    """
    try:
        isDir = os.path.isdir(temppath)
        if isDir:
            os.system("sudo mv -f "+temppath+ " files/")
    except Exception as ex:
        print("Failure: Error occurred while moving {}".format(ex))


def execute_linux_command(args):
    """
    This function is to execute linux commands 
    """
    return subprocess.run(args, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)


def is_iso_image(filename):
    """
    This function is to check if the given filename is a iso image 
    Arguments:
        filename {string} -- file name of the ISO image
    
    Returns:
        Boolean -- Returns True if the given filename is ISO image and False if given filename is not an ISO image
    """
    try:
        if os.path.splitext(filename)[1] == ".iso":
            return True
        return False
    except Exception as e:
        print("Failure: Error occured while validating iso image filename {}".format(e) )
        return False


def is_iso_file_present(image_url):
    """
    
    Arguments:
        image_url {string} -- URL of the OS image
    
    Returns:
        Boolean -- Returns True if the ISO file is present on the remote location. Returns False if the ISO image is not present on the remote location
    """
    try:
        requests.packages.urllib3.disable_warnings()
        file_head = requests.head(image_url, verify=False)
        if file_head.status_code == 200:
            return True
    except Exception as e:
        print("Failure: ISO file not preset on the remote location {}".form)
        return False
    return False