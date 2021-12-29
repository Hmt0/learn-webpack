# 编写、调试具有多个段的程序
assume cs:code, ds:data, ss:stack
data segment
    dw 0123h,0456h,0789h,0abch,0defh,0fedh,0cbah,0987h
data ends
stack segment
    dw 0, 0, 0, 0, 0, 0, 0, 0
stack ends
code segment
start:  mov ax, stack
        mov ss, ax
        mov sp, 16

        mov ax, data
        mov ds, ax

        push ds:[0]
        push ds:[2]
        pop ds:[2]
        pop ds:[0]

        mov ax,4c00H
        int 21h
code ends
end start

# 将下面程序编译、连接，用Debug加载、跟踪，然后回答问题
assume cs:code,ds:data,ss:stack

data:segment
    dw 0123h, 0456h
data ends

stack segment
    dw 0, 0
stack ends

code segment
start:  mov ax, stack
        mov ss,ax
        mov sp, 16

        mov ax, data
        mov ds, ax

        push ds:[0]
        push ds:[2]
        pop ds:[2]
        pop ds:[0]

        mov ax, 4c00H
        int 21H

code ends

end start


# 将下面的程序编译、连接，用Debug加载、跟踪，然后回答问题
assume cs:code, ds:data, ss:stack
code segment
start:  mov ax, stack
        mov ss, ax
        mov sp, 16

        mov ax, data
        mov ds, ax

        push ds: [0]
        push ds: [2]
        pop ds: [2]
        pop ds: [0]

        mov ax, 4c00H
        int 21H
code ends
data segment
    dw 0123h, 0456h
data ends
stack segment
    dw 0, 0
stack ends
end start

# 编写code段中的代码，将a段和b段中的数据依次相加，将结果存到c段中
assume cs:code
a segment
    db 1, 2, 3, 4, 5, 6, 7, 8
a ends
b segment
    db 1, 2, 3, 4, 5, 6, 7, 8
b ends
c segment
    db 0, 0, 0, 0, 0, 0, 0, 0
c ends
code segment
start:
    mov bx, 0
    mov cx, 8
    s:  
        loop s
code ends
end start