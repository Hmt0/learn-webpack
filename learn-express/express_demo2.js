var express = require('express')
var app = express()

app.get('/', function(req, res) {
    console.log('主页GET请求')
    res.send('Hello Get')
})

// POST请求
app.post('/', function(req, res) {
    console.log('主页POST请求')
    res.send('Hello POST')
})

// /del_user页面响应
app.post('/del_user', function(req, res) {
    console.log('/del_user响应DELETE请求')
    res.send('删除页面')
})

// /list_user页面GET请求
app.get('/list_user', function(req, res) {
    console.log('/list_user GET请求')
    res.send('用户列表页面')
})

// 对页面abcd,abxcd,ab123cd，等响应的GET请求
app.get('/ab*cd', function(req, res) {
    console.log('/ab*cd GET请求')
    res.send('正则匹配')
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log('应用实例，访问地址为http://%s:%s', host, port)
})