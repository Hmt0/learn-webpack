var fs = require('fs')

console.log('创建目录/tmp/test/')
fs.mkdir('./test/', function(err) {
    if(err) {
        return console.error(err)
    }
    console.log('目录创建成功')
})

// 可以添加recursive:true参数，不管创建的目录/tmp和/tmp/a是否存在
fs.mkdir('./tmp/a/apple', { recursive: true}, (err) => {
    if(err) throw err
})