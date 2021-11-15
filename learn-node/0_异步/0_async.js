var fs = require("fs")

// 异步
fs.readFile("input.txt", function(err, data) {
    if(err) return console.log(err)
    console.log(data.toString())
})

console.log("程序执行结束")