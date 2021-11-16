var util = require('util')

function fn() {
    return Promise.reject(null)
}

const callbackFunction = util.callbackify(fn)

callbackFunction((err, ret) => {
    if(err && err.hasOwnProperty('reason') && err.reason === null) {
        console.log(err.reason)
    }
})