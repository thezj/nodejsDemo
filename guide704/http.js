const http = require('http')
const querystring = require('querystring')
const url = require('url')
let log = (...parameter) => {
    console.log(...parameter)
}

//制定当接受到客户端请求时所需执行的处理，第一个参数是http.IncomingMessage对象
// 代表一个客户端请求，第二个参数是一个http.serverResponse对象，代表一个服务器响应对象
let listener = (req, res) => {
    log(`方法${req.method}，\n url字符串${req.url}，\n 请求头对象${req.headers}，\n http版本${req.httpVersion}\n`)
    let postData = []
    req.on('data', data => {
        postData.push(data)
        log('服务器接收到数据(不包括url参数)：\n', typeof data, data.toString('utf8'))
    })
    req.on('end', i => {

        log('客户端请求数据已接受完毕')
        let postdata = JSON.parse(Buffer.concat(postData).toString())
        let urldata = querystring.parse(url.parse(req.url).query)
        Object.assign(postdata, urldata)
        log(postdata)
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.write(JSON.stringify(postdata))
        res.end('<div>hahaha</div>')
    })
}
//创建http服务器对象
let server = http.createServer(listener)
//设置服务器的超时时间
server.setTimeout(1000 * 60 * 60)
server.on('connection', socket => {
    console.log('客户端链接已建立')
})

server.on('close', i => {
    log('服务器已关闭')
})

//制定服务器要监听的端口,地址,最大连接数，回调函数
let serverListenCB = i => {
    log('服务器开始监听')

}
server.listen(1717, '127.0.0.1', 3, serverListenCB)