const path = require('path')
const fs = require('fs')
let log = (...parameter) => {
    console.log(...parameter)
}

// let p = path.normalize('.//a//b//d//..//c/e//..//')+'message.txt'
// let file = fs.createReadStream(p,'utf8')
// file.on('data',d=>{
//     log(d)
// })

let p = path.normalize('.//a//b//d//..//c/e//..//') + 'message.txt'
p = path.join(__dirname, 'a', 'b', 'c') + '\\message.txt'
p = path.resolve(__dirname, 'a', 'b', 'c') + '\\message.txt'
log(p)
let file = fs.createReadStream(p, 'utf8')
file.on('data', d => {
    log(d)
})