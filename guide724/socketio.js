const io = require('socket.io')
const http = require('http')
const express = require('express')
const fs = require('fs')

let app = express()
app.get('/', (req, res, next) => {
    res.sendfile(__dirname + '/index.html')
})
let server = http.createServer(app)
server.listen(1717)

let socket = io.listen(server)
let names = []
socket.on('connection', client => {
    console.log('客户端建立链接')
    let currentName = ''
    //开起链接时，发送已有用户
    client.emit('login', names)
    client.on('login', name => {
        names.push(name)
        currentName = name
        //客户端登陆后，发送已有用户
        socket.emit('login', names)
    })
    client.on('sayHi', MSG => {
        socket.emit('newMSG', currentName+':'+MSG)
    })
    // socket.send('你好')
    // socket.emit('news', {
    //     word: '你好哦'
    // })
    // socket.on('reply', msg => {
    //     console.log('接收到一个消息:', msg)
    // })
    // socket.on('message', msg => {
    //     console.log('接收到一个消息:', msg)
    // })
    client.on('disconnect', i => {
        console.log('客户端断开链接')
    })

})