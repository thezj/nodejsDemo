const http = require('http')
http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    res.write('你好')
    res.end()
    console.log('这段代码在子进程中')
}).listen(1717)