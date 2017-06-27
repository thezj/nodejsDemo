const url = require("url")
const http = require('http')

let WebSocket = urlPath => {
    this.options = url.parse(urlPath)
    this.connect()
}

WebSocket.prototype.onopen = () => {
    console.log('open')
}

WebSocket.prototype.setSocket = socket => {
    this.socket = socket
}

WebSocket.prototype.connect = function () {
    let key = new Buffer(this.options.protocolVersion + '-' + Date.now()).toString('base64')
    let shasum = crypto.createHash('sha1')
    let expected = shasum.update(key + '258EAFA5-E914-47DA-95CA-C5ABoDC85B11').digest('base64')
    let options = {
        port: this.options.port,
        host: this.options.hostname,
        headers: {
            'Connection': 'Upgrade',
            'Upgrade': 'websocket',
            'Sec-WebSocket-Version': this.options.protocolVersion,
            'Sec-WebSocket-Key': key
        }
    }
    let req = http.request(options)
    req.end()
    req.on('upgrade', (res, socket, upgradeHead) => {
        this.setSocket(socket)
        this.onopen()
    })
}

let server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/plain'
    })
    res.end('Hello World\n')
})

server.listen(12010)

server.on('upgrade', (req, socket, upgradeHead) => {
    console.log('s')
    let head = new Buffer(upgradeHead.length)
    upgradeHead.copy(head)
    let key = req.headers['sec-websocket-key']
    let shasum = crypto.createHash('sha1')
    key = shasum.update(key + '258EAFA5-E914-47DA-95CA-C5ABoDC85B11').digest('base64')
    let headers = [
        'HTTP/1.1 101 Switching Protocols',
        'Upgrade:websocket',
        'Connection:Upgrade',
        'Sec-WebSocket-Accept: ' + key,
        'Sec-WebSocket-Protocol: ' + protocol
    ]
    socket.setNoDelay(true)
    socket.write(headers.concat('','').join('\r\n'))
    let websocket = new WebSocket()
    websocket.setSocket(socket)
    websocket.onopen = ()=>{
        console.log('open')
    }
})