var util = require('util')

console.log(util.isDate(new Date()))
// 没有new 关键字返回一个字符串
console.log(typeof Date(), util.isDate(Date()))
console.log(util.isDate({}))
