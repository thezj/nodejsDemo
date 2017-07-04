const net = require('net')

let log = (...parameter) => {
    console.log(...parameter)
}


let option = {}
let callback = socket => {
    log('客户端与服务端链接已建立')
    TCPS.getConnections((e, count) => {
        log('当前存在%d个客户端链接', count)
        TCPS.maxConnections = 10
    })
}
let TCPS = net.createServer(option, callback)

TCPS.on('connection', socket => {
    log('connection')
})
TCPS.on('error', e => {
    log(e)
})

TCPS.listen(1717, 'localhost', i => {
    log('开始监听')
    log('被监听的地址信息为：', TCPS.address())
})