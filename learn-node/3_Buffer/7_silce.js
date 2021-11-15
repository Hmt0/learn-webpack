const buf1 = Buffer.from('adefsfs')

const buf2 = buf1.slice(0, 2)
console.log('buf2 content:' + buf2.toString())