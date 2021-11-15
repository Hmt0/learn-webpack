const buf1 = Buffer.from('abcdefg')
const buf2 = Buffer.from('buifbse')

buf2.copy(buf1, 2)

console.log(buf1.toString())