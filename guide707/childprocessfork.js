const process = require('process')
const cp = require('child_process')
const http = require('http')
const net = require('net')
const fs = require('fs')
const path = require('path')
let log = (...parameter) => {
    console.log(...parameter)
}


// let cp1 = cp.fork(path.resolve('./test/test.js'))
// cp1.on('message', m => {
//     log('父进程收到信息：', m)
//     cp1.kill()
// })
// cp1.send({
//     name: '装逼大王'
// })

// let child = cp.fork('./child.js')
// let server = net.createServer()
// server.listen(1717, '127.0.0.1', i => {
//     child.send('server', server)
//     log('父进程中服务器已创建')
//     let httpServer = http.createServer()
//     httpServer.on('request', (req, res) => {
//         console.log('父进程接受到请求')
//         let sum = 0;
//         for (let i = 0; i < 1000000; i++) {
//             sum += i
//         }
//         res.write('客户端请求在父进程被处理')
//         res.end('sum=' + sum)
//     })
//     httpServer.listen(server)
// })


let cp1 = cp.execFile('C:/Program Files (x86)/Tencent/QQBrowser/QQBrowser.exe')
cp1.on('close',i=>{ log('close')})
cp1.on('exit',i=>{log('exit')})
