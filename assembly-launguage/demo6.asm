// 若要使程序中的jmp指令执行后，CS:IP指向程序的第一条指令，在data段中应该定义哪些数据？
assume cs:code
data segment
    db 3 dup(0)
data ends

code segment
    start: mov ax, data
    mov ds,ax
    mov bx,0
    jmp word ptr [bx+1]
code ends
end start

// 补全程序，使jmp指令执行后，CS:IP指向程序的第一条指令
assume cs:code

data segment
    dd 12345678h
data ends

code segment
    start: mov ax,data
           mov ds,ax
           mov bx,0
           mov [bx],bx
           mov [bx+2],cs
           jmp sword ptr ds:[0]
code ends
end start