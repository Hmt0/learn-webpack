const buf = Buffer.alloc(256)

const len = buf.write('hmt')

console.log('写入字节数：' + len)