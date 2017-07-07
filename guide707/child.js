const http = require('http')
process.on('message', (msg, server) => {
    if (msg === 'server') {
        console.log('子进程中服务器已创建')
        let httpServer = http.createServer()
        httpServer.on('request', (req, res) => {
            console.log('子进程接受到请求')
            let sum = 0;
            for (let i = 0; i < 1000000; i++) {
                sum += i
            }
            res.write('客户端请求在子进程被处理')
            res.end('sum=' + sum)
        })
        httpServer.listen(server)
    }
})