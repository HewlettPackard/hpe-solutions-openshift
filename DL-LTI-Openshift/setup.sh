###
## Copyright (2020) Hewlett-Packard Enterprise Development LP
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
#!/bin/sh

echo "============================================================"
echo "Starting Environment Setup"
echo "============================================================"

# Detect OS
if [ -f /etc/redhat-release ]; then
    OS="RHEL"
    PACKAGE_MANAGER="yum"
    DEV_TOOLS="Development Tools"
    FIREWALL_SERVICE="firewalld"
    SYSTEMCTL="systemctl"
    PYTHON_PKG="python3"
elif [ -f /etc/lsb-release ]; then
    OS="Ubuntu"
    PACKAGE_MANAGER="apt-get"
    DEV_TOOLS="build-essential"
    FIREWALL_SERVICE="ufw"
    SYSTEMCTL="systemctl"
    PYTHON_PKG="python3"
else
    echo "Unsupported OS"
    exit 1
fi

echo "============================================================"
echo "Installing development tools"
echo "============================================================"
if [ "$OS" = "RHEL" ]; then
    $PACKAGE_MANAGER -y groupinstall "$DEV_TOOLS"
else
    $PACKAGE_MANAGER update -y
    $PACKAGE_MANAGER install -y $DEV_TOOLS
fi
echo "============================================================"
echo "Installing Nginx server"
echo "============================================================"
$PACKAGE_MANAGER -y install nginx

echo "============================================================"
echo "Stopping default HTTP server if exists"
echo "============================================================"
SERVICE="httpd"
if ps ax | grep -v grep | grep $SERVICE > /dev/null; then
    $SYSTEMCTL stop $SERVICE
fi

echo "============================================================"
echo "Removing default Nginx configs that use port 80"
echo "============================================================"
rm -f /etc/nginx/conf.d/default.conf

mkdir -p /etc/nginx/ssl

if [ ! -f /etc/nginx/ssl/nginx.crt ]; then
    openssl req -x509 -nodes -days 365 \
        -newkey rsa:2048 \
        -keyout /etc/nginx/ssl/nginx.key \
        -out /etc/nginx/ssl/nginx.crt \
        -subj "/C=US/ST=State/L=City/O=Company/OU=IT/CN=localhost"
fi

echo "============================================================"
echo "Configuring nginx.conf for ports 81 and 444 ONLY"
echo "============================================================"

cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.bak

cat > /etc/nginx/nginx.conf <<EOF
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

events {
    worker_connections 1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    keepalive_timeout  65;

    server {
        listen       81;
        server_name  localhost;

        location / {
            root   /usr/share/nginx/html;
            index  index.html index.htm;
        }
    }

    server {
        listen              444 ssl;
        server_name         localhost;

        ssl_certificate     /etc/nginx/ssl/nginx.crt;
        ssl_certificate_key /etc/nginx/ssl/nginx.key;

        ssl_protocols       TLSv1.2 TLSv1.3;
        ssl_ciphers         HIGH:!aNULL:!MD5;

        location / {
            root   /usr/share/nginx/html;
            index  index.html index.htm;
        }
    }
}
EOF

echo "============================================================"
echo "Installing policycoreutils-python-utils if needed"
echo "============================================================"
if ! command -v semanage &> /dev/null; then
    $PACKAGE_MANAGER -y install policycoreutils-python-utils
fi

echo "============================================================"
echo "Allowing nginx to bind to port 444 via SELinux"
echo "============================================================"
semanage port -a -t http_port_t -p tcp 444 || echo "Port 444 already allowed"

echo "============================================================"
echo "Applying setcap to nginx binary"
echo "============================================================"
setcap 'cap_net_bind_service=+ep' /usr/sbin/nginx

echo "============================================================"
echo "Configuring firewall for ports 81 and 444 (if firewall is running)"
echo "============================================================"

if [ "$FIREWALL_SERVICE" = "firewalld" ]; then
    if $SYSTEMCTL is-active --quiet firewalld; then
        echo "firewalld is running, configuring ports..."
        firewall-cmd --permanent --add-port=81/tcp
        firewall-cmd --permanent --add-port=444/tcp
        firewall-cmd --reload
    else
        echo "firewalld is not running. Skipping firewall port configuration."
    fi
elif [ "$FIREWALL_SERVICE" = "ufw" ]; then
    if ufw status | grep -qw active; then
        echo "ufw is active, configuring ports..."
        ufw allow 81
        ufw allow 444
    else
        echo "ufw is not active. Skipping firewall port configuration."
    fi
fi

echo "============================================================"
echo "Starting Nginx on ports 81 and 444"
echo "============================================================"
nginx -t && $SYSTEMCTL enable nginx && $SYSTEMCTL restart nginx

echo "============================================================"
echo "Installing ISO-repackaging utilities"
echo "============================================================"
if [ "$OS" = "RHEL" ]; then
    $PACKAGE_MANAGER -y install syslinux isomd5sum ansible-core python3-pip
    $PACKAGE_MANAGER -y install genisoimage bc
else
    $PACKAGE_MANAGER update -y
    $PACKAGE_MANAGER install -y syslinux-utils isolinux isomd5sum ansible
    $PACKAGE_MANAGER install -y genisoimage bc
fi

echo "============================================================"
echo "Verifying Python3 status and installing prerequisites"
echo "============================================================"
pip3 install --upgrade pip setuptools_rust

version=$($PYTHON_PKG -V 2>&1 | grep -Po '(?<=Python )\d+\.\d+')
min=3.9

if [ "$(printf '%s\n' "$min" "$version" | sort -V | head -n1)" != "$min" ]; then
    echo "!!!!!!!!!!!======================================!!!!!!!!!!!!"
    echo "This script requires Python 3.9 or greater"
    echo "Install and enable Python 3.9 or above using:"
    echo "RHEL: scl enable python39 bash"
    echo "Ubuntu: update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.9 1"
    echo "Then: pip3 install -r requirements.txt"
    echo "!!!!!!!!!!!======================================!!!!!!!!!!!!"
    exit 1
else
    echo "Python3 is enabled"
    echo "Installing requirements"
    pip3 install -r requirements.txt
fi

echo "============================================================"
echo "Installing coreos-installer and Rust toolchain"
echo "============================================================"

if [ "$OS" = "RHEL" ]; then
    echo "Installing coreos-installer via yum"
    $PACKAGE_MANAGER -y install coreos-installer

elif [ "$OS" = "Ubuntu" ]; then
    echo "Installing Rust toolchain and dependencies for coreos-installer on Ubuntu"

    # Install Rust using rustup
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
    . "$HOME/.cargo/env"

    # Install build dependencies
    sudo apt update
    sudo apt install -y pkg-config libssl-dev libclang-dev clang libzstd-dev git

    # Use /tmp for the build
    TMP_DIR="/tmp/coreos-installer-$$"
    mkdir -p "$TMP_DIR"
    echo "Cloning coreos-installer into $TMP_DIR"
    git clone https://github.com/coreos/coreos-installer.git "$TMP_DIR"
    cd "$TMP_DIR" || { echo "Failed to enter $TMP_DIR"; exit 1; }

    echo "Building coreos-installer..."
    cargo build --release

    if [ -f target/release/coreos-installer ]; then
        echo "Copying coreos-installer to /usr/local/bin"
        sudo cp target/release/coreos-installer /usr/local/bin
    else
        echo "Build failed: coreos-installer binary not found"
        exit 1
    fi

    # Cleanup
    cd ~
    rm -rf "$TMP_DIR"
    echo "Cleaned up temporary directory"
fi

