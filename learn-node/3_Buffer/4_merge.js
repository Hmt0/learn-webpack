const buf1 = Buffer.from(('hmt'))
const buf2 = Buffer.from(('yyds'))
const buf3 = Buffer.concat([buf1, buf2])
console.log('buf3内容：' + buf3.toString())