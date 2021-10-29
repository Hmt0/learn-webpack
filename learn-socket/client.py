import socket

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect(("127.0.0.1", 1234))
    # 传入服务器地IP地址和端口号
    s.sendall(b"Hello, HMT!")
    # 发送消息给服务器
    data = s.recv(1024)
    print("Received:", repr(data))