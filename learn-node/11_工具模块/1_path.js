var path = require('path')

// 格式化路径
console.log('normalization: ' + path.normalize('/text/text1///2slashes/1slash/tab..'))

// 连接路径
console.log('join path: ' + path.join('/text', 'text1', '2slashes/1slash', 'tab', '..'))

// 转换为绝对路径
console.log('resolve: ' + path.resolve('1_path.js'))

// 路径中文件的后缀名
console.log('ext name: ' + path.extname('1_path.js'))