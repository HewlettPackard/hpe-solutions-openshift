import socket
import sys
socket.setdefaulttimeout(1)
socket.socket().connect((sys.argv[1], int(sys.argv[2])))
