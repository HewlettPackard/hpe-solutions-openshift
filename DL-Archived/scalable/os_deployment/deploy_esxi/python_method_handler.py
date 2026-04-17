###
## Copyright (2020) Hewlett Packard Enterprise Development LP
##
## Licensed under the Apache License, Version 2.0 (the "License");
## You may not use this file except in compliance with the License.
## You may obtain a copy of the License at
##
## http://www.apache.org/licenses/LICENSE-2.0
##
## Unless required by applicable law or agreed to in writing, software
## distributed under the License is distributed on an "AS IS" BASIS,
## WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
## See the License for the specific language governing permissions and
## limitations under the License.
####

import sys
import json
import time
from deploy import image_deployment

def image_deployment_(server, config):
    """
    This function is to call image_deployment function
    Arguments
        server {dict}: server details
        config {dict}: configuration details 
    """
    return image_deployment(server, config)

assert len(
    sys.argv) == 3, "This script takes in exactly two arguments, argument 1: function anme, argument 2: JSON string of arguments to the function."
function_name = str(sys.argv[1])
arguments = json.loads(sys.argv[2])

if function_name == 'image_deployment_':
    print(image_deployment_(**arguments))
else:
    print('Unknown function name {}'.format(function_name))
