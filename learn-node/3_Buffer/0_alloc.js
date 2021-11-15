const buf1 = Buffer.alloc(10)

const buf2 = Buffer.alloc(10, 1)

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写
const buf3 = Buffer.allocUnsafe(10)

const buf4 = Buffer.from([1, 2, 3])

const buf5 = Buffer.from('test')

const buf6 = Buffer.from('test', latin1)