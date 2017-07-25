let chat = io.connect('http://localhost:1717/chat')
chat.on('connect', i => {
    chat.on('sayhi', message => {
        console.log('从chat命名空间接收到消息：', message)
    })
    chat.emit('sayhi', '你好，我是客户端')
})

// let socket = new WebSocket('ws://localhost:1717/chat')
// socket.onmessage = event => {
//     console.log(event)
// }