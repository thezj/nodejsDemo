import http from 'http'
http.createServer((req, res) => {
    req.on('data', data => {
        console.log(data)
        res.write(data)
    })
}).listen(8888)