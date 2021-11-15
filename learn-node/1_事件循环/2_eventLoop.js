var events = require('events')
var fs = require("fs")

var eventEmmiter = new events.EventEmitter()

var eventHandler = function connect() {
    console.log("连接成功")
    eventEmmiter.emit('data_received')
}

eventEmmiter.on('data_received', function() {
    console.log('数据连接成功')
})

eventEmmiter.on('eventName', eventHandler)

eventEmmiter.emit('eventName')