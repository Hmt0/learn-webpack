var http = require('http')
var url = require('url')

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': "text/html;charset='utf-8'"})
    res.write("<head><meta charset='UTF-8'></head>")
    var params = url.parse(req.url, true).query
    res.write('网站名: ' + params.name)
    res.write('\n')
    res.write('网站URL: ' + params.url)
    res.end()
}).listen(3000)