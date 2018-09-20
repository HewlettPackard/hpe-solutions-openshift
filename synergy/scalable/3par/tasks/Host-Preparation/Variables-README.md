## Template Variables

These variables for creating a template in RHVM needs to be filled by the installer according to his environment

| Variable                |  Scope              | Description                            |  Reference                                    |
| :-----------------------|:--------------------|:---------------------------------------|:----------------------------------------------|
|second_disk_physical     |Worker Node          |Path to the second disk on Physical Worker nodes for configuring Docker local storage | /dev/mapper/mpatha  |
|pool_ids_physical        |Worker Node          |RedHat Subscription Pool ID for the Worker Node |
|pool_ids_vms             |Management Node (VMs)|RedHat Subscription Pool ID for the Management Nodes (VMs) |

