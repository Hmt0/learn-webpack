import socket

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    # IPv4地址家族
    # TCP协议
    s.bind(("0.0.0.0", 1234))
    # 关联到主机的某一个网卡和端口上
    s.listen()
    # 置为监听状态并等待客户端连接
    c, addr = s.accept()
    # 接受来自任意客户端的链接并返回一个新的socket c,用于与连接的客户端进行通信
    # 客户端的IP地址addr
    with c:
        print(addr, "connected,")

        while True:
            data = c.recv(1024)
            # 接收客户端传来的信息
            # 1024是一次性接收数据的最大长度：1024字节、
            if not data:
                break
            c.sendall(b"I receive")
            c.sendall(data)
            # 原封不动地将数据回传给客户端

