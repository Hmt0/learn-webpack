var util = require('util')
function Preson() {
    this.name = 'byvoid'
    this.toString = function() {
        return this.name
    }
}

var obj = new Preson()
console.log(obj)
console.log(util.inspect(obj))
console.log(util.inspect(obj, true))