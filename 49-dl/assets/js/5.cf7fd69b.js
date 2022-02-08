(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{493:function(e,t,a){e.exports=a.p+"assets/img/figure9.61ebf7e0.png"},494:function(e,t,a){e.exports=a.p+"assets/img/figure10.d218e0f3.png"},495:function(e,t,a){e.exports=a.p+"assets/img/figure11.7849a3a0.png"},496:function(e,t,a){e.exports=a.p+"assets/img/figure12.2369ed69.png"},497:function(e,t,a){e.exports=a.p+"assets/img/figure13.6e274580.png"},498:function(e,t,a){e.exports=a.p+"assets/img/figure14.e3d7eec5.png"},499:function(e,t,a){e.exports=a.p+"assets/img/figure15.0fc4428d.png"},500:function(e,t,a){e.exports=a.p+"assets/img/figure16.f83d1253.png"},501:function(e,t,a){e.exports=a.p+"assets/img/figure17.1094252c.png"},502:function(e,t,a){e.exports=a.p+"assets/img/figure18.4f7a0b71.png"},503:function(e,t,a){e.exports=a.p+"assets/img/figure19.6482a79b.png"},504:function(e,t,a){e.exports=a.p+"assets/img/figure20.d5f01aa8.png"},534:function(e,t,a){"use strict";a.r(t);var s=a(54),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"physical-storage-components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#physical-storage-components"}},[e._v("#")]),e._v(" Physical Storage components")]),e._v(" "),s("h2",{attrs:{id:"hpe-3par-fiber-channel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hpe-3par-fiber-channel"}},[e._v("#")]),e._v(" HPE 3PAR Fiber Channel")]),e._v(" "),s("h3",{attrs:{id:"initializing-the-hpe-3par-storeserv-8440-storage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initializing-the-hpe-3par-storeserv-8440-storage"}},[e._v("#")]),e._v(" Initializing the HPE 3PAR StoreServ 8440 Storage")]),e._v(" "),s("p",[e._v("This section assumes that the HPE 3PAR StoreServ 8440 Storage was ordered with a physical service processor or with a Virtual Service Processor. VM is installed and functioning within the environment and is available on the same network as HPE ProLiant DL servers. It also assumes that a DHCP server is present on the network. The user should have the serial number of the storage that is being installed.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),s("p",[e._v("Ensure that information such as user credentials, network access details and serial numbers referenced are securely recorded for current and future reference.")])]),e._v(" "),s("h3",{attrs:{id:"service-processor-networking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-processor-networking"}},[e._v("#")]),e._v(" Service Processor networking")]),e._v(" "),s("p",[e._v("To configure the Service Processor networking, use the following steps:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Login to a physical Service Processor (SP) or access the console of a Virtual Service Processor via the virtual console.")])]),e._v(" "),s("li",[s("p",[e._v("Log on as "),s("strong",[e._v("setupusr")]),e._v(" without a password.")])]),e._v(" "),s("li",[s("p",[e._v("When you configure the network, type "),s("strong",[e._v("Y")]),e._v(" and press "),s("strong",[e._v("Enter")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Confirm the network parameters that were handed to the Service Processor by your DHCP server and if correct, type Y and then press "),s("strong",[e._v("Enter")]),e._v(". Ensure you note the IP address.")])]),e._v(" "),s("li",[s("p",[e._v("When prompted, press "),s("strong",[e._v("Enter")]),e._v(" to exit. You will now configure the Service Processor. Connect to the SP using the address "),s("strong",[e._v("https:///sp/SpSetupWizard.html")]),e._v(", and log on with the user setupusr and no password.")])]),e._v(" "),s("li",[s("p",[e._v("At the Welcome screen click "),s("strong",[e._v("Next")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Enter the serial number of your HPE 3PAR StoreServ storage and select "),s("strong",[e._v("Generate SP ID")]),e._v(". Click "),s("strong",[e._v("Next")]),e._v(" when done.")])]),e._v(" "),s("li",[s("p",[e._v("On the Configure Service Processor Networking screen give the SP a hostname, check "),s("strong",[e._v("Enable DNS Support")]),e._v(" and enter the domain name and DNS server IP. Click "),s("strong",[e._v("Next")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Enter any proxy information for "),s("em",[e._v("Remote Support")]),e._v(" and click "),s("strong",[e._v("Next")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Enter the appropriate information in the "),s("em",[e._v("System Support Information")]),e._v(" screen and click "),s("strong",[e._v("Next")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("At the "),s("em",[e._v("Time and Region")]),e._v(" screen, select "),s("strong",[e._v("Automatic")]),e._v(" and enter the "),s("strong",[e._v("IP address")]),e._v(" of your NTP server. Choose the appropriate Time Zone and click "),s("strong",[e._v("Next")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("When prompted, change the password and click "),s("strong",[e._v("Next")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Click "),s("strong",[e._v("Next")]),e._v(" at the summary screen after validating all information.")])]),e._v(" "),s("li",[s("p",[e._v("Remote connectivity will be tested. In the event of a failed test, ensure that the SP can speak outbound via HTTPS and that the proxy information entered is correct.")])])]),e._v(" "),s("h3",{attrs:{id:"storage-system"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#storage-system"}},[e._v("#")]),e._v(" Storage system")]),e._v(" "),s("p",[e._v("Use the following steps to configure the storage system.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("From the SP, select "),s("strong",[e._v("Launch")]),e._v(" adjacent to the "),s("strong",[e._v("Storage System Setup Wizard")]),e._v(" and accept the EULA. Click "),s("strong",[e._v("Next")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Confirm the serial number of your array and click "),s("strong",[e._v("Next")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("At the "),s("em",[e._v("Configure Networking")]),e._v(" screen you will need to enter a name and network information for the array. Click "),s("strong",[e._v("Next")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Select "),s("strong",[e._v("Copy time options from the Service Processor")]),e._v(" and click "),s("strong",[e._v("Next")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Create a password for the 3paradm user and click "),s("strong",[e._v("Next")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Verify the configuration information and click "),s("strong",[e._v("Next")]),e._v(". This will initialize and test the array and then add it to the SP. This process can take an extended amount of time. After all tests have passed, click "),s("strong",[e._v("Finish")]),e._v(".")]),e._v(" "),s("p",[e._v("After completion, configure the Web services API and Common InformationModule (CIM).")])]),e._v(" "),s("li",[s("p",[e._v("Log onto the array via SSH as the 3paradm user.")])]),e._v(" "),s("li",[s("p",[e._v("Run the following command to generate a self-signed certificate.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" createcert unified-server -selfsigned -keysize "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2048")]),e._v(" -days "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1095")]),e._v(" -CN "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("fqdn of 3PAR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -SAN "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"DNS:<fqdn of 3PAR>, IP:<management IP of 3PAR>"')]),e._v("\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Answer "),s("strong",[e._v("Yes")]),e._v(" when prompted to continue creating the certificate.")])]),e._v(" "),s("li",[s("p",[e._v("Issue the following commands to start the WSAPI and CIM services.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" setcim -https "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" startcim\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" startwsapi\n")])])])]),e._v(" "),s("li",[s("p",[e._v("You can verify that the services are enabled and running by typing the following commands.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" showcim\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" showwsapi\n")])])])])]),e._v(" "),s("h4",{attrs:{id:"san-switch-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#san-switch-configuration"}},[e._v("#")]),e._v(" SAN Switch configuration")]),e._v(" "),s("p",[e._v("The following steps should be repeated on each SAN switch:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Connect via the serial port to the first SAN switch and open a terminal session using "),s("strong",[e._v("9600")]),e._v(", "),s("strong",[e._v("8")]),e._v(", "),s("strong",[e._v("N")]),e._v(" and "),s("strong",[e._v("1")]),e._v(" with "),s("strong",[e._v("no flow control")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Logon as "),s("strong",[e._v("admin")]),e._v(" with the default password of '"),s("strong",[e._v("password")]),e._v("'. Change the passwords for admin and user as prompted.")])]),e._v(" "),s("li",[s("p",[e._v("At the command line, run the following commands to configure IP addressing for the switch.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" switchname "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("hostname of switch"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" ipaddrset\n")])])])]),e._v(" "),s("li",[s("p",[e._v("When prompted, turn off DHCP and configure date and time information for the switch.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" tstimezone "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("##")]),e._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("date")]),e._v(" MMddhhmmyy\n")])])]),s("p",[e._v("where ## is the difference in the local time zone from GMT and MM is the 2-digit month, day is the 2-digit date, hh is the 2-digit hour (24-hour format), mm is the 2-digit minute and yy is the year.")])]),e._v(" "),s("li",[s("p",[e._v("Configure the NTP Server with the following command.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" tsclockserver "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("ip address"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])])]),e._v(" "),s("h3",{attrs:{id:"configure-the-fabric-and-licensing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-fabric-and-licensing"}},[e._v("#")]),e._v(" Configure the fabric and licensing")]),e._v(" "),s("p",[e._v("The user will need to configure fabric and licensing in the environment.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Run the following command to configure the fabric name.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" fabricname --set "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("san_a_fabricname"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Add any licenses by running the following command.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" licenseadd\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Verify all ports that will be used have been enabled. If you have not enabled, then run the following command.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" licenseport -reserve\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Configure the Domain ID by typing the following.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" switchdisable\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" configure\n")])])])]),e._v(" "),s("li",[s("p",[e._v("When prompted enter "),s("strong",[e._v("yes")]),e._v(" for Fabric parameters and assign a Domain ID. Once entered, press "),s("strong",[e._v("Control-D")]),e._v(" to exit.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" switchenable\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Reboot the switch to apply changes and repeat these steps on the second switch.")])])]),e._v(" "),s("h3",{attrs:{id:"isl-trunk-the-fiber-channel-switches"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isl-trunk-the-fiber-channel-switches"}},[e._v("#")]),e._v(" ISL Trunk the Fiber Channel switches")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Log in to each switch via SSH and use the "),s("strong",[e._v("licenseshow")]),e._v(" command to verify that the trunk license has been applied.")])]),e._v(" "),s("li",[s("p",[e._v("On switch 1 and switch 2, run the "),s("strong",[e._v("portcfgpersistentdisable")]),e._v(" to disable the ports that will be used for ISL trunks.")])]),e._v(" "),s("li",[s("p",[e._v("Run the "),s("strong",[e._v("portcfgislmode")]),e._v(" command and set the ports to mode 1 to make them ready for ISL traffic.")])]),e._v(" "),s("li",[s("p",[e._v("Enable the ISL trunk ports on the switches by running the "),s("strong",[e._v("portcfgpersistentenable")]),e._v(" command.")])]),e._v(" "),s("li",[s("p",[e._v("Run the "),s("strong",[e._v("trunkshow")]),e._v(" and "),s("strong",[e._v("fabricshow")]),e._v(" commands to verify that the trunk ports are configured and that both switches display the correct partner switch.")])])]),e._v(" "),s("h3",{attrs:{id:"configure-an-active-zone-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-an-active-zone-set"}},[e._v("#")]),e._v(" Configure an active zone set")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("To create a zone using the WWPN of node 0, slot 0, port 1 on the HPE 3PAR StoreServ 8440, obtain the WWPN by typing "),s("strong",[e._v("switchshow")]),e._v(" and check the information on the switch port that 3PAR port N0:S0:P1 is connected.")])]),e._v(" "),s("li",[s("p",[e._v("Run the following commands to create the zone for this port.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" zonecreate "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("3PAR_"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("1")]),e._v(">")]),e._v("_N0S0P1, "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"wwpn"')]),e._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" cfgcreate solution_cfg, "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<3PAR_1>_N0S0P1"')]),e._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" cfgenable solution_cfg\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Follow the prompts to enable the solution configuration.")])]),e._v(" "),s("li",[s("p",[e._v("Repeat these steps for the remaining SAN fabrics using the WWPN of each 3PAR node, slot, and port.")])])]),e._v(" "),s("h3",{attrs:{id:"install-and-configure-the-hpe-3par-ssmc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-and-configure-the-hpe-3par-ssmc"}},[e._v("#")]),e._v(" Install and configure the HPE 3PAR SSMC")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("From within the Windows management station, install the HPE 3PAR StoreServ Management Console by copying the media to the station and running the "),s("em",[e._v("HPESSMC-")]),e._v("-win64.exe* user. Follow the onscreen prompts.")])]),e._v(" "),s("li",[s("p",[e._v("Use a web browser to connect to "),s("strong",[e._v("https://3par_ssmc_ip:8443")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Select "),s("strong",[e._v("Set credential")]),e._v(" and enter the "),s("strong",[e._v("username")]),e._v(" and "),s("strong",[e._v("password")]),e._v(". Select "),s("strong",[e._v("Set")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Install the HPE 3PAR Admin Tools by copying the media to the management server, mounting it and executing "),s("em",[e._v("cli.exe")]),e._v(". Follow the prompts to install. The user will need to add each array in the solution to the SSMC Administrator Console.")])]),e._v(" "),s("li",[s("p",[e._v("Logon to the console and select "),s("strong",[e._v("Actions")]),e._v(" and then "),s("strong",[e._v("Add")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Under System DNS names or IP addresses, "),s("strong",[e._v("enter the IP or name")]),e._v(" of the 3PAR array. The username will be "),s("strong",[e._v("3paradm")]),e._v(" and the password is the one the user created earlier. Select "),s("strong",[e._v("Add")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("After the array appears in the "),s("strong",[e._v("NotConnected")]),e._v(" state, select it and select "),s("strong",[e._v("Actions")]),e._v(" and then "),s("strong",[e._v("AcceptCertificate")]),e._v(". Select "),s("strong",[e._v("Accept and cache")]),e._v(". After a moment, the array will appear in the "),s("strong",[e._v("Connected")]),e._v(" state.")])]),e._v(" "),s("li",[s("p",[e._v("Repeat these steps for any additional arrays within the solution.")])])]),e._v(" "),s("h3",{attrs:{id:"create-common-provisioning-groups-cpgs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-common-provisioning-groups-cpgs"}},[e._v("#")]),e._v(" Create Common Provisioning Groups (CPGs)")]),e._v(" "),s("p",[e._v("CPGs are required within this solution. By default, HPE 3PAR StoreServ arrays create a default set of CPGs.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Logon to the array as the 3PAR admin user using the SSMC.")])]),e._v(" "),s("li",[s("p",[e._v("Select "),s("strong",[e._v("3PAR StoreServ -> Show all -> Common Provisioning Groups")]),e._v(". Select "),s("strong",[e._v("Create CPG")]),e._v(". Provide a descriptive name and use RAID6. The remaining default parameters are acceptable for this\nsolution.")])]),e._v(" "),s("li",[s("p",[e._v("Create a second CPG for snapshots.")])])]),e._v(" "),s("h2",{attrs:{id:"hpe-3par-iscsi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hpe-3par-iscsi"}},[e._v("#")]),e._v(" HPE 3PAR iSCSI")]),e._v(" "),s("h3",{attrs:{id:"configure-the-management-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-management-server"}},[e._v("#")]),e._v(" Configure the management server")]),e._v(" "),s("p",[e._v("This section assumes that a physical or virtual management server running Microsoft Windows Server 2012 R2 is available and able to communicate on the same network as the HPE 3PAR StoreServ storage. If it is not, the user should create this management VM with the following:")]),e._v(" "),s("ul",[s("li",[e._v("Microsoft Windows Server 2012 R2")]),e._v(" "),s("li",[e._v("2 vCPU")]),e._v(" "),s("li",[e._v("8GB RAM")]),e._v(" "),s("li",[e._v("1x 100GB HDD for OS and applications")]),e._v(" "),s("li",[e._v("1x 200GB HDD for Media - One (1) Network Interface connected to the management network where the storage resides")])]),e._v(" "),s("p",[e._v("The management VM should have Microsoft IIS configured with the web server role and WebDAV publishing with basic authentication enabled. After the role is installed, perform the following steps.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("In Server Manager select Tools and then Internet Information Services (IIS) Manager.")])]),e._v(" "),s("li",[s("p",[e._v("Select the server name and double-select MIME Types.")])]),e._v(" "),s("li",[s("p",[e._v("Select Add and enter the filename extension .vib as type application/octet stream.")])]),e._v(" "),s("li",[s("p",[e._v("Click OK.")])]),e._v(" "),s("li",[s("p",[e._v("Repeat this process but substitute the filename extension .iso for .vib.")])]),e._v(" "),s("li",[s("p",[e._v("Close the IIS Manager window.")]),e._v(" "),s("p",[e._v("Next the user will need to create a repository to house the Service Pack for ProLiant (SPP) with the HPE CA750 recipe.")])]),e._v(" "),s("li",[s("p",[e._v("From File Explorer navigate to the second HDD and create a folder named Media")])]),e._v(" "),s("li",[s("p",[e._v("Within the media folder, create a folder named SPP.")])]),e._v(" "),s("li",[s("p",[e._v("Copy the SPP set files to this folder.")])]),e._v(" "),s("li",[s("p",[e._v("Create a folder under SPP and name the folder Hotfixes. Copy the SPP.")])]),e._v(" "),s("li",[s("p",[e._v("In Server Manager, relaunch Internet Information Services manager as in Step 1.")])]),e._v(" "),s("li",[s("p",[e._v("Expand the hostname and then expand Sites.")])]),e._v(" "),s("li",[s("p",[e._v("Right-click the default web site and select add virtual directory. Enter Media in the Alias field and select the media folder on the second drive for the physical path. Click OK twice when done.")])]),e._v(" "),s("li",[s("p",[e._v("From within IIS Manager ensure that the folders exist under default web site.")])]),e._v(" "),s("li",[s("p",[e._v("Select the Media folder and then double-select directory browsing and ensure it is Enabled.")])]),e._v(" "),s("li",[s("p",[e._v("Select default web site and double-click the WebDAV Authoring Rules icon. Select Enable WebDAV in the Actions Pane and then select Add Authoring Rule.")])]),e._v(" "),s("li",[s("p",[e._v("Select All content and All users radio button and then check the Read box under permissions. Click OK to commit.")])]),e._v(" "),s("li",[s("p",[e._v("WebDAV setting in the Actions pane and in the Property Behavior section, ensure that the Allow Anonymous Property Queries and Allow Property Queries of Infinite Depth are both set to True. Select Apply.")])]),e._v(" "),s("li",[s("p",[e._v("Select the Media directory in the left pane and in the right pane, double-click the HTTP Response Headers icon.")])]),e._v(" "),s("li",[s("p",[e._v("Select Add in the Actions pane and in the 'name' field enter MaxRepoSize. In the value field, enter the size of the drive that the Media folder was created on. In the case of this document you would enter 200G. Click OK when done.")])]),e._v(" "),s("li",[s("p",[e._v("Select the server name in the left pane and then in the Actions pane select Restart to restart the web server.")])])]),e._v(" "),s("h3",{attrs:{id:"install-and-configure-the-hpe-3par-ssmc-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-and-configure-the-hpe-3par-ssmc-2"}},[e._v("#")]),e._v(" Install and configure the HPE 3PAR SSMC")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("From within the Windows management station, install the HPE 3PAR StoreServ Management Console by copying the media to the station and running the HPESSMC-*-win64.exe installer. Follow the onscreen\nprompts.")])]),e._v(" "),s("li",[s("p",[e._v("Use a web browser to connect to https:/<3par_ssmc/>//:8443.")])]),e._v(" "),s("li",[s("p",[e._v("Select Set credential and enter the username and password. Select Set when done.")])]),e._v(" "),s("li",[s("p",[e._v("Install the HPE 3PAR admin tools by copying the media to the management server, mounting it and executing cli.exe. Follow the prompts to install. The user will need to add each array in the solution to the SSMC Administrator Console.")])]),e._v(" "),s("li",[s("p",[e._v("Log on to the console and select Actions and then Add.")])]),e._v(" "),s("li",[s("p",[e._v("Under System DNS names or IP addresses enter the IP or name of the 3PAR array. The username will be 3paradm and the password is the one the user created earlier. Select Add.")])]),e._v(" "),s("li",[s("p",[e._v("After the array appears in the Not Connected state, select it and select Actions and then Accept Certificate. Select Accept and cache. After a moment the array will show in the Connected state.")])]),e._v(" "),s("li",[s("p",[e._v("Repeat these steps for any additional arrays within the solution.")])])]),e._v(" "),s("h3",{attrs:{id:"create-common-provisioning-groups-cpgs-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-common-provisioning-groups-cpgs-2"}},[e._v("#")]),e._v(" Create Common Provisioning Groups (CPGs)")]),e._v(" "),s("p",[e._v("CPGs are required within this solution. By default, HPE 3PAR StoreServ Storage Arrays create a default set of CPGs.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Log on to the array as the 3PAR admin user using the SSMC.")])]),e._v(" "),s("li",[s("p",[e._v("Select 3PAR StoreServ -> Show all -> Common Provisioning Groups.")])]),e._v(" "),s("li",[s("p",[e._v("Select Create CPG. Provide a descriptive name and use RAID6. The remaining default parameters are acceptable for this solution.")])]),e._v(" "),s("li",[s("p",[e._v("Create a second CPG for snapshots.")])])]),e._v(" "),s("h3",{attrs:{id:"integrate-hpe-3par-storeserv-storage-to-vsphere-hosts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integrate-hpe-3par-storeserv-storage-to-vsphere-hosts"}},[e._v("#")]),e._v(" Integrate HPE 3PAR StoreServ Storage to vSphere hosts")]),e._v(" "),s("p",[e._v("This section describes the process of creating hosts and storage volumes for the virtualization hosts. The steps below describes overview of the tasks.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Create hosts HPE 3PAR StoreServ Storage Management Console.")])]),e._v(" "),s("li",[s("p",[e._v("Create virtual volume for the vSphere hosts.")])])]),e._v(" "),s("h3",{attrs:{id:"creating-hosts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-hosts"}},[e._v("#")]),e._v(" Creating hosts")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Login to the 3PAR StoreServ Management Console. Select Hosts from the dropdown menu as shown.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(493),alt:""}})])]),e._v(" "),s("li",[s("p",[e._v("On the Hosts page, click "),s("strong",[e._v("Create Hosts")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("In the Create Host page, provide appropriate values for the variables.")]),e._v(" "),s("ul",[s("li",[e._v("Name: <>")]),e._v(" "),s("li",[e._v("System: <<3PAR storage system name>>")]),e._v(" "),s("li",[e._v("Domain: None")]),e._v(" "),s("li",[e._v("Host Set: NA")]),e._v(" "),s("li",[e._v("Host OS: VMware (ESXi)")])])]),e._v(" "),s("li",[s("p",[e._v("In the Paths section, click Add iSCSI. On the Add iSCSI page, provide the vSphere hostnames and IQN and then click Add. Repeat this step for all the vSphere hosts to permit all the vSphere hosts with access to the volume.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(494),alt:""}})])]),e._v(" "),s("li",[s("p",[e._v("After all values have been filled in, click "),s("strong",[e._v("Create")]),e._v(".")])])]),e._v(" "),s("h3",{attrs:{id:"creating-virtual-volume"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-virtual-volume"}},[e._v("#")]),e._v(" Creating virtual volume")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Login to the 3PAR StoreServ Management Console. From the dropdown menu, navigate to Virtual Volumes as shown.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(495),alt:""}})])]),e._v(" "),s("li",[s("p",[e._v("Click "),s("strong",[e._v("Create virtual volumes")]),e._v(".")]),e._v(" "),s("p",[s("img",{attrs:{src:a(496),alt:""}})])]),e._v(" "),s("li",[s("p",[e._v("From the Create Virtual Volume page, provide values for the following fields and click "),s("strong",[e._v("Create")]),e._v(".")]),e._v(" "),s("ul",[s("li",[e._v("Name:")]),e._v(" "),s("li",[e._v("System: <3PAR storage system name>")]),e._v(" "),s("li",[e._v("Domain: None")]),e._v(" "),s("li",[e._v("Provisioning: Thin Provisioned")]),e._v(" "),s("li",[e._v("Dedup: No")]),e._v(" "),s("li",[e._v("Compression: No")]),e._v(" "),s("li",[e._v("CPG:")]),e._v(" "),s("li",[e._v("Size: 3TB")]),e._v(" "),s("li",[e._v("Volume Set: NA")])]),e._v(" "),s("p",[s("img",{attrs:{src:a(497),alt:""}})])]),e._v(" "),s("li",[s("p",[e._v("After the Virtual volume has been created, select the Export option in the Actions drop down menu.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(498),alt:""}})])]),e._v(" "),s("li",[s("p",[e._v("From the Export Virtual Volumes page, click "),s("strong",[e._v("Add")]),e._v(".")]),e._v(" "),s("p",[s("img",{attrs:{src:a(499),alt:""}})])]),e._v(" "),s("li",[s("p",[e._v("From the Add page, select the host to which the virtual volume needs to be exported and click Add.")])]),e._v(" "),s("li",[s("p",[e._v("After adding the host, select the LUN Auto check box and then click Export.")])])]),e._v(" "),s("h2",{attrs:{id:"hpe-nimble-iscsi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hpe-nimble-iscsi"}},[e._v("#")]),e._v(" HPE Nimble iSCSI")]),e._v(" "),s("h3",{attrs:{id:"integrate-hpe-nimble-storage-with-vsphere-hosts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integrate-hpe-nimble-storage-with-vsphere-hosts"}},[e._v("#")]),e._v(" Integrate HPE Nimble Storage with vSphere hosts")]),e._v(" "),s("ol",[s("li",[e._v("Create initiator groups in the HPE Nimble Storage management console.")]),e._v(" "),s("li",[e._v("Create a volume for the ESXi hosts.")])]),e._v(" "),s("h3",{attrs:{id:"create-initiator-groups-in-the-hpe-nimble-storage-management-console"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-initiator-groups-in-the-hpe-nimble-storage-management-console"}},[e._v("#")]),e._v(" Create initiator groups in the HPE Nimble Storage management console")]),e._v(" "),s("p",[e._v("The initiator group allows connecting volumes directly to the IQNs of the iSCSI adapters. From the HPE Nimble Storage management console, initiator groups should be created with the IQNs of each of the ESXi hosts. Initiator groups can be created by following the steps outlined as follows:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Log in to the HPE Nimble Storage management console.")])]),e._v(" "),s("li",[s("p",[e._v("Navigate to Manage -> Data Access.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(500),alt:""}})])]),e._v(" "),s("li",[s("p",[e._v("On the Create Initiator Group page, enter the details for the following parameters.")]),e._v(" "),s("ul",[s("li",[e._v("Name: < Name of the initiator group >")]),e._v(" "),s("li",[e._v("Subnets: From the drop-down menu, select Use selected subnets and add the selected data subnets.")]),e._v(" "),s("li",[e._v("Initiators: Add the name and IQNs of all the initiators (vSphere hosts), and click Create.")])])])]),e._v(" "),s("p",[s("img",{attrs:{src:a(501),alt:""}})]),e._v(" "),s("h3",{attrs:{id:"create-a-volume-for-the-esxi-hosts-in-hpe-nimble-storage-management-console"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-volume-for-the-esxi-hosts-in-hpe-nimble-storage-management-console"}},[e._v("#")]),e._v(" Create a volume for the ESXi hosts in HPE Nimble Storage management console")]),e._v(" "),s("p",[e._v("After the initiator group is created, perform the following to provision a new volume to store the management virtual machines. A minimum volume size of 3TB is recommended to host the management nodes.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("From the HPE Nimble Storage management console, navigate to MANAGE -> DATA STORAGE.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(502),alt:""}})])]),e._v(" "),s("li",[s("p",[e._v('Click "+" icon to create a new volume.')]),e._v(" "),s("p",[s("img",{attrs:{src:a(503),alt:""}})])]),e._v(" "),s("li",[s("p",[e._v("Provide the values to the following parameters for creating a volume. Sample values for the parameters are listed as follows.")]),e._v(" "),s("ul",[s("li",[e._v("Name: < Name for the Volume >")]),e._v(" "),s("li",[e._v("Location: < Desired location of the Volume >")]),e._v(" "),s("li",[e._v("Performance policy: < Assign a performance policy for the volume>")]),e._v(" "),s("li",[e._v("Size: As per the need of user environment (3TB recommended).")]),e._v(" "),s("li",[e._v("Protection policy: Assign a protection policy as required.")]),e._v(" "),s("li",[e._v("Access: Assign the initiator group for the vSphere hosts created earlier.")]),e._v(" "),s("li",[e._v("CHAP Account: Assign the CHAP account and select the Allow Multiple Initiator access box.")])]),e._v(" "),s("p",[s("img",{attrs:{src:a(504),alt:""}})])]),e._v(" "),s("li",[s("p",[e._v("Click "),s("strong",[e._v("Create")]),e._v(" to complete the volume creation.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),s("p",[e._v("If you utilize virtual worker nodes, it is recommended to create another volume with a size based on the installation environment. 1TB is the minimum recommended size.")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);