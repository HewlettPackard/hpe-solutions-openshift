(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{318:function(t,s,n){"use strict";n.r(s);var a=n(13),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"deploying-squid-proxy-on-head-nodes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploying-squid-proxy-on-head-nodes"}},[t._v("#")]),t._v(" Deploying Squid proxy on head nodes")]),t._v(" "),s("p",[t._v("Squid is a proxy server that caches content to reduce bandwidth and load web pages more quickly. This section describes how to set up Squid as a proxy for HTTP, HTTPS, and FTP protocol, as well as authentication and restricting access.")]),t._v(" "),s("p",[t._v("Prerequisites:")]),t._v(" "),s("ul",[s("li",[t._v("The Keepalived service must be available")])]),t._v(" "),s("p",[t._v("To deploy Squid proxy server on head nodes:")]),t._v(" "),s("ol",[s("li",[t._v("Install the Squid package on all head nodes")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" squid\n")])])]),s("ol",[s("li",[t._v("Edit /etc/squid/squid.conf configuration file")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Recommended minimum configuration:")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Example rule allowing access from your local networks.")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Adapt to list your (internal) IP networks from where browsing")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# should be allowed")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#acl localnet src 172.0.0.0/8   # RFC1918 possible internal network")]),t._v("\n\nacl localnet src "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" localnet "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# RFC1918 possible internal network")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#acl localnet src 192.168.0.0/16        # RFC1918 possible internal network")]),t._v("\n\nacl localnet src fc00::/7       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# RFC 4193 local private network range")]),t._v("\n\nacl localnet src fe80::/10      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# RFC 4291 link-local (directly plugged) machines")]),t._v("\n\n acl SSL_ports port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v("\n\nacl Safe_ports port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("210")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# wais")]),t._v("\n\nacl Safe_ports port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1025")]),t._v("-65535  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# unregistered ports")]),t._v("\n\nacl Safe_ports port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("280")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# http-mgmt")]),t._v("\n\nacl Safe_ports port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("488")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gss-http")]),t._v("\n\nacl Safe_ports port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("591")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# filemaker")]),t._v("\n\nacl Safe_ports port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("777")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# multiling http")]),t._v("\n\nacl CONNECT method CONNECT\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Recommended minimum Access Permission configuration:")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Only allow cachemgr access from localhost")]),t._v("\n\nhttp_access allow localhost manager\n\nhttp_access deny manager\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Deny requests to certain unsafe ports")]),t._v("\n\nhttp_access deny "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("Safe_ports\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Deny CONNECT to other than secure SSL ports")]),t._v("\n\nhttp_access deny CONNECT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("SSL_ports\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# We strongly recommend the following be uncommented to protect innocent")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# web applications running on the proxy server who think the only")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# one who can access services on "localhost" is a local user')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#http_access deny to_localhost")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# INSERT YOUR OWN RULE(S) HERE TO ALLOW ACCESS FROM YOUR CLIENTS")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Example rule allowing access from your local networks.")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Adapt localnet in the ACL section to list your (internal) IP networks")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# from where browsing should be allowed")]),t._v("\n\nhttp_access allow localnet\n\nhttp_access allow localhost\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# And finally deny all other access to this proxy")]),t._v("\n\ncache_peer "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" corporate_proxy "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" parent "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" corporate_proxy_port "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" no-query default\n\nacl all src all\n\nhttp_access allow localhost\n\nnever_direct allow all\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Squid normally listens to port 3128")]),t._v("\n\nhttp_port "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" squid_port "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Uncomment the line below to enable disk caching - path format is /cygdrive/<full path to cache folder>, i.e.")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#cache_dir aufs /cygdrive/d/squid/cache 3000 16 256")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Leave coredumps in the first cache dir")]),t._v("\n\ncoredump_dir /var/cache/squid\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Add any of your own refresh_pattern entries above these.")]),t._v("\n\nrefresh_pattern ^ftp:           "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1440")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("%     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10080")]),t._v("\n\nrefresh_pattern ^gopher:        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1440")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("%      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1440")]),t._v("\n\nrefresh_pattern "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("/cgi-bin/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("%      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\nrefresh_pattern "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("               "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("%     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4320")]),t._v("\n\ndns_nameservers "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" master_dns "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" slave1_dns "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" slave2_dns "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmax_filedescriptors "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3200")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("\n\nacl Safe_ports port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1025")]),t._v("-65535  $ unregistered ports\n\nacl Safe_ports port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("280")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# http-mgmt")]),t._v("\n\nacl Safe_ports port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("488")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gss-http")]),t._v("\n\nacl Safe_ports port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("591")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# filemaker")]),t._v("\n\nacl Safe_ports port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("777")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# multiling http")]),t._v("\n\nacl CONNECT method CONNECT\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Recommended minimum Access Permission configuration:")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Only allow cachemgr access from localhost")]),t._v("\n\nhttp_access allow localhost manager\n\nhttp_access deny manager\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Deny requests to certain unsafe ports")]),t._v("\n\nhttp_access deny "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("Safe_ports\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Deny CONNECT to other than secure SSL ports")]),t._v("\n\nhttp_access deny CONNECT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("SSL_ports\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# We strongly recommend the following be uncommented to protect innocent")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# web applications running on the proxy server who think the only")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# one who can access services on "localhost" is a local user')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#http_access deny to_localhost")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# INSERT YOUR OWN RULE(S) HERE TO ALLOW ACCESS FROM YOUR CLIENTS")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Example rule allowing access from your local networks.")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Adapt localnet in the ACL section to list your (internal) IP networks")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# from where browsing should be allowed")]),t._v("\n\nhttp_access allow localnet\n\nhttp_access allow localhost\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# And finally deny all other access to this proxy")]),t._v("\n\ncache_peer "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" corporate_proxy "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" parent "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" corporate_proxy_port "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" no-query default\n\nacl all src all\n\nhttp_access allow localhost\n\nnever_direct allow all\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Squid normally listens to port 3128")]),t._v("\n\nhttp_port "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" squid_port "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Uncomment the line below to enable disk caching - path format is /cygdrive/<full path to cache folder>, i.e.")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#cache_dir aufs /cygdrive/d/squid/cache 3000 16 256")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Leave coredumps in the first cache dir")]),t._v("\n\ncoredump_dir /var/cache/squid\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Add any of your own refresh_pattern entries above these.")]),t._v("\n\nrefresh_pattern ^ftp:           "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1440")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("%     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10080")]),t._v("\n\nrefresh_pattern ^gopher:        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1440")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("%      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1440")]),t._v("\n\nrefresh_pattern "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("/cgi-bin/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("%      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\nrefresh_pattern "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("               "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("%     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4320")]),t._v("\n\ndns_nameservers "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" master_dns "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" slave1_dns "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" slave2_dns "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmax_filedescriptors "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3200")]),t._v("\n")])])]),s("ol",[s("li",[t._v("Enable and start the Squid service.")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ systemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--now")]),t._v(" squid\n")])])]),s("ol",[s("li",[t._v("Open port 3128 in the firewall.")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ firewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--permanent")]),t._v(" --add-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3128")]),t._v("/tcp\n$ firewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--reload")]),t._v("\n")])])]),s("ol",[s("li",[t._v("Edit /etc/environment.conf configuration file.")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("FTP_PROXY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" squid VIP "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" squid_port "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("https_proxy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" squid VIP "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" squid_port "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("http_proxy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" squid VIP "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" squid_port "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("no_proxy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("localhost,127.0.0.1,"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" squid VIP "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HTTPS_PROXY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" squid VIP "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" squid_port "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ftp_proxy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" squid VIP "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" squid_port "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("ol",[s("li",[t._v("Edit /etc/keepalived/keepalived.conf configuration file.")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("vrrp_script chk_squid_service "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\nscript "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/sbin/squid -k check"')]),t._v("\n\ninterval "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nvrrp_instance proxy_ip1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\nstate MASTER\n\ninterface "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" VIP_Interface "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nvirtual_router_id "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\npriority "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),t._v("\n\nvirtual_ipaddress "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" VIP "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" VIP_Prefix "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" dev "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" VIP_Interface "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" label "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" VIP_Interface "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(":1\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ntrack_script "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  chk_squid_service\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",[s("li",[s("p",[t._v("Restart Keepalived service.")])]),t._v(" "),s("li",[s("p",[t._v("Restart Squid service.")])])]),t._v(" "),s("p",[s("strong",[t._v("Configuring the cluster-wide proxy during installation")])]),t._v(" "),s("p",[t._v("Most production environments deny direct access to the Internet and instead access the available HTTP or HTTPS proxy. To use a proxy while configuring a new RHOCP cluster, the proxy settings of that proxy must be configured in the install-config.yaml file.")]),t._v(" "),s("p",[s("strong",[t._v("NOTE")])]),t._v(" "),s("p",[t._v("For bare metal installations, if the node IP addresses are not assigned from the range specified in the networking.machineNetwork[].cidr field in the install-config.yaml file, they must be added in the proxy.noProxy field.")]),t._v(" "),s("p",[t._v("Prerequisites:")]),t._v(" "),s("ul",[s("li",[t._v("An existing install-config.yaml file must be available")]),t._v(" "),s("li",[t._v("If the cluster requires access to certain sites, review those sites and determine whether any of them need to bypass the proxy. By default, all cluster egress traffic is proxied, including calls to hosting cloud provider APIs. These sites must be added to the spec.noProxyfield of the proxy object to bypass the proxy, if necessary")])]),t._v(" "),s("p",[t._v("To configure the proxy settings of a new RHOCP cluster:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Edit the install-config.yaml file and add the following details:")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("baseDomain:")]),t._v(" Base domain of the DNS that hosts RHOCP.")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("name:")]),t._v(" Name of the RHOCP cluster. It is same as the new domain created in DNS.")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("replicas:")]),t._v(" Update this field to reflect the corresponding number of master or worker instances required for the RHOCP cluster as per the installation environment requirements. It is recommended to have a minimum of three master nodes and two worker nodes per RHOCP cluster.")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("clusterNetworks:")]),t._v(" This field is pre-populated by Red Hat. Update this field only if a custom cluster network is needed.")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("pullSecret:")]),t._v(" Update this field with the pull secret for the Red Hat account. Login to Red Hat account using the following link and retrieve the pull secret:")])])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cloud.redhat.com/openshift/install/metal/user-provisioned",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cloud.redhat.com/openshift/install/metal/user-provisioned"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("sshKey:")]),t._v(" Update this field with the sshKey of the installer VM and copy the SSH key in install-config.yaml file. Generate the SSH key with the following command:")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ ssh-keygen\n")])])]),s("p",[t._v("The following install-config.yaml file is an example with the path /opt/NGS-OpenShift/playbooks/roles/generate_ignition_files/ignitions/install-config.yml that can be used to update the fields to suit your installation environment:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("apiVersion: v1\n\nbaseDomain: "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" name of the base domain "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nproxy:\n\n  httpProxy: http://172.28.201.200:3128/\n\n  httpsProxy: http://172.28.201.200:3128/\n\n  noProxy: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".apps.ocp.isv.local,.cluster.local,.hp.com,.hpcloud.net,.hpecorp.net,.localdomain.com,.svc,10.0.0.0/16,10.0.0.1,10.0.0.2,10.0.0.3,10.1.0.0/16,12.128.0.0/14,127.0.0.1,16.110.135.51,16.110.135.52,172.17.0.0/16,172.28.230.0/24,172.28.230.100,172.28.230.101,172.28.230.102,172.28.230.103,172.28.230.105,172.28.230.106,172.28.230.107,172.28.230.108,172.28.230.109,172.28.230.110,172.28.230.111,172.28.230.112,172.28.230.113,172.28.230.114,172.28.230.115,172.30.0.0/16,api,api-int,api-int.ocp.isv.local,api.ocp.isv.local,bootstrap,bootstrap.ocp.isv.local,haproxy.ocp.isv.local,isv.local,localaddress,localhost,master1,master1.ocp.isv.local,master2,master2.ocp.isv.local,master3,master3.ocp.isv.local,resolver.hpecorp.net,worker1,worker1.ocp.isv.local,worker2,worker2.ocp.isv.local,worker3,worker3.ocp.isv.local"')]),t._v("\ncompute:\n\n- hyperthreading "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" Enabled\n\nname "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" worker\n\nreplicas "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\ncontrolPlane "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v("\n\nhyperthreading "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" Enabled\n\nname "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" master\n\nreplicas "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n\nmetadata "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v("\n\nname "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" name of the cluster, same as the new domain under the base domain created "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\nnetworking "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v("\n\nclusterNetworks "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v("\n\n- cidr "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.128")]),t._v(".0.0/14\n\nhostPrefix "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v("\n\nnetworkType "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" OpenShiftSDN\n\nserviceNetwork "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v("\n\n- "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.30")]),t._v(".0.0/16\n\nplatform "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v("\n\nnone "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\npullSecret: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pull secret provided as per the Red Hat account'")]),t._v("\n\nsshKey: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ssh key of the installer VM'")]),t._v("\n")])])]),s("p",[s("strong",[t._v("NOTE")])]),t._v(" "),s("p",[t._v("The ignition files have a time-out period of 24 hours, and it is critical that the clusters are created within 24 hours after generating the ignition files. If the time-out period crosses 24 hours, clean up the files from the directory where the ignition files were saved to regenerate the ignition files.")])])}),[],!1,null,null,null);s.default=e.exports}}]);