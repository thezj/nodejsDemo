import net from 'net'
let sockets = []
let letServer = net.createServer(socket => {

    //记录当前链接用户
    sockets.push(socket)
    let index = sockets.indexOf(socket)
    console.log('user' + index + ' is online')
    //消息手机
    let tempData = ''
    let returnCode = Buffer.from([0x0d, 0x0a])
    socket.on('data', data => {
        console.log('got data', data)
        tempData += data
        console.log(tempData)
        if (Buffer.compare(data, returnCode) === 0) {
            sockets.forEach(otherSocket => {
                if (otherSocket !== socket) {
                    otherSocket.write(new Buffer('user' + index + 'say:'))
                    otherSocket.write(tempData)
                }
            })
            tempData = ''
        }
    })

    socket.on('end', () => {
        console.log('user' + index + 'connection broken')
    })
    socket.write('socket work')
}).listen(8124, () => {
    console.log('socket bound')
})