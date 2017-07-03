const path = require('path')
const fs = require('fs')
const _ = require('lodash')
let log = (...parameter) => {
    console.log(...parameter)
}

// let p = path.normalize('.//a//b//d//..//c/e//..//')+'message.txt'
// let file = fs.createReadStream(p,'utf8')
// file.on('data',d=>{
//     log(d)
// })

// let p = path.normalize('.//a//b//d//..//c/e//..//') + 'message.txt'
// p = path.join(__dirname, 'a', 'b', 'c') + '\\message.txt'
// p = path.resolve(__dirname, 'a', 'b', 'c') + '\\message.txt'
// p = path.resolve('a', 'b', 'c','message.txt')
// log(p)
// let file = fs.createReadStream(p, 'utf8')
// file.on('data', d => {
//     log(d)
// })

let p = path.relative('c:\\v1\v2\v3', 'c:\\v1\v2x\v3x')
p = path.relative('c:/sdf.xtx', 'a/b/c/message.txt')
log(p)
// p = path.dirname(p)
// p = path.basename(p,'.txt')
p = path.join(path.dirname(p), path.basename(p, '.txt') + path.extname(p))

log(p)
log(path.sep)
log(path.delimiter)