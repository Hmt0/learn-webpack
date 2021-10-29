import socket
import threading
# 多线程
import os

WEBROOT = "webroot"

def handle_client(c, addr):
    print(addr, "connected,")

    while c:
        request = c.recv(1024)
        # 接收客户端传来的信息
        # 1024是一次性接收数据的最大长度：1024字节、
        headers = request.split(b"\r\n")
        # 拆分消息存放在header列表中
        # HTTP标准中定义的换行符是”回车+换行（CR LF）“
        file = headers[0].split()[1].decode()
        # 提取文件名

        if file == "/":
            file = "/index.html"
        # 如果用户请求的是根路径，则直接返回index.html
        
        try:
            with open(WEBROOT + file, "rb") as f:
                content = f.read()
            response = b"HTTP/1.0 200 OK\r\n\r\n" + content
        except FileNotFoundError:
            response = b"HTTP/1.0 404 NOT FOUND\r\n\r\nFlie not found!"

        c.sendall(response)

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        # IPv4地址家族
        # TCP协议
        s.bind(("0.0.0.0", 1234))
        # 关联到主机的某一个网卡和端口上
        s.listen()
        # 置为监听状态并等待客户端连接
        while True:
            c, addr = s.accept()
            # 接受来自任意客户端的链接并返回一个新的socket c,用于与连接的客户端进行通信
            # 客户端的IP地址addr
            t = threading.Thread(target=handle_client, args=(c, addr))
            # 将客户端的socket C和地址传递给线程
            t.start()

