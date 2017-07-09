const process = require('process')
const cp = require('child_process')
const http = require('http')
const net = require('net')
const fs = require('fs')
const path = require('path')
const cluster = require('cluster')
let log = (...parameter) => {
    console.log(...parameter)
}


cluster.on('fork', worder => {
    log(`子进程${worder.id}开起`)
})
cluster.on('online', worder => {
    log(`子进程${worder.id}活动`)
})
cluster.on('listening', (worder, address) => {
    log(`子进程中服务器开始监听，${JSON.stringify(address)}`)
})


// if (cluster.isMaster) {
//     cluster.fork()
//     log('这段代码运行在主进程中')
// } else {
//     http.createServer((req, res) => {
//         res.writeHead(200, {
//             'Content-Type': 'text/plain'
//         })
//         res.write('你好')
//         res.end()
//         log('这段代码运行在子进程中')
//     }).listen(1717)
// }

// cluster.setupMaster({
//     exec: 'child.js'
// })
// cluster.fork()
// log('这段代码在主进程中')

// if (cluster.isMaster) {
//     cluster.fork()
//     cluster.fork()
// } else {
//     log('我在子进程被运行ID=>', cluster.worker.id)
//     http.createServer((req, res) => {
//         let sum = 0
//         for (let i = 0; i < 5000000; i++) {
//             sum += i
//         }
//         res.writeHead(200)
//         res.write('客户端在子进程中被处理id=>'+cluster.worker.id)
//         res.end()
//     }).listen(1717)
// }

if (cluster.isMaster) {
    cluster.setupMaster({
        silent: true
    })
    let worker = cluster.fork()
    worker.process.stdout.on('data', data => {
        log('接收到客户端请求：', data.toString())
    })
} else {
    http.createServer((req, res) => {
        res.writeHead(200, {
            'Content-Type': 'text/plain;charset=UTF-8',
        })
        res.end('你好')
        process.stdout.write(req.url)
    }).listen(1717)
}