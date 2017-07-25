const http = require('http')
const express = require('express')
const pug = require('pug')
const socketIO = require('socket.io')



let app = express()
app.set('views', './')
app.set('view engine', 'pug')
app.get('/', (req, res) => {
    res.render('index')
})
let server = http.createServer(app)
server.listen(1717)

let io = socketIO.listen(server)

let chat = io.of('/chat')
chat.on('connection', client => {

    client.emit('sayhi', '欢迎访问chat空间！')
    client.send('欢迎访问chat空间！')
    client.on('sayhi', message => {
        console.log('chat命名空间接受到消息', message)
    })
})