import http from 'http'

let app = http.createServer((req, res) => {
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end('hello node 你好\n')
})

app.listen(9999)

console.log('server running at port 9999')