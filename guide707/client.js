const http = require('http')
for (let i = 0; i < 2; i++) {
    let req = http.request('http://127.0.0.1:1717', res => {
        res.on('data', chunk => {
            console.log('响应内容：', chunk.toString())
        })
    })
    req.end()
}