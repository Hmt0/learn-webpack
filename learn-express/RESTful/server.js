var express = require('express')
var app = express()
var fs = require('fs')

// 添加的新用户数据
var user = {
    "user4": {
        name: "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
}

app.get('/addUser', function(req, res) {
    // 读取已存在的数据
    fs.readFile(__dirname + '/' + 'users.json', 'utf-8', function(err, data) {
        data = JSON.parse(data)
        data["user4"] = user["user4"]
        console.log(data)
        res.end(JSON.stringify(data))
    }) 
})

// 根据id读取用户信息
// app.get('/:id', function(req, res) {
//     fs.readFile(__dirname + '/' + 'users.json', 'utf-8', function(err, data) {
//         data = JSON.parse(data)
//         console.log('params', req.params)
//         var user = data['user' + req.params.id]
//         console.log('user', user)
//         res.end(JSON.stringify(user))
//     })
// })

// 删除用户
var id = 2

app.get('/deleteUser', function(req, res) {
    fs.readFile(__dirname + '/' + 'users.json', 'utf-8' ,function(err, data) {
        data = JSON.parse(data)
        delete data['user' + id]
        console.log('data', data)
        res.end(JSON.stringify(data))
    })
})

app.get('/listUsers', function(req, res) {
    fs.readFile(__dirname + '/' + 'users.json', 'utf-8', function(err, data) {
        console.log(data)
        res.end(data)
    })
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log('应用实例，访问地址为http://%s:%s', host, port)
})