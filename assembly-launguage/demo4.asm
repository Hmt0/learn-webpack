# 编程，向内存0：200~0：23F依次传送数据0~63（3FH），程序中只能使用9条指令
assume cs:code

code segment
    mov ax,0020h
    mov ds,ax
    mov bx, 0
    mov cx, 40h
s:  mov ds:[bx], dl
    inc bx
    loop s

    mov ax, 4c00H
    int 21h
code ends
end

# 下面的程序的功能是将“mov ax,4c00h”之前的指令复制到内存0:200处，补全程序。上机调试，跟踪运行结果。
assume cs:code
code segment 
    mov ax,