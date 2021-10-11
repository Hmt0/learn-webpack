#!/usr/bin/env node
console.log("开始写日记8")

const program = require('commander');

// 版本号
program.version(require('../package.json').version);

program.command('init <name>')
    .description('init a dairy')
    .action(name => {
        console.log('init', name);
        require('../lib/init')(name);
    });

program.parse(process.argv)
console.log(process.argv)