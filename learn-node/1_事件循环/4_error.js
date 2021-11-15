var events = require('events')
var emitter = new events.EventEmitter()
// emitter.on('error', function error() {
//     console.log('出错啦！')
// })
emitter.emit('error')