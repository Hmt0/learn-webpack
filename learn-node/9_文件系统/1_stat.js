var fs = require('fs')

fs.stat('D:/GitHubProject/learn-webpack/learn-node/9_文件系统/0_open.js', function(err, stats) {
    console.log(stats.isFile())
})