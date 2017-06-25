import dgram from 'dgram'
let message = new Buffer('im jim')
let dgramServer = dgram.createSocket('udp4')
dgramServer.send(message,0,message.length,41234,'127.0.0.1',()=>{
    dgramServer.close()
})
