var fs = require("fs");

// 同步
var data = fs.readFileSync("input.txt");

console.log(data.toString());

console.log("程序执行结束！")