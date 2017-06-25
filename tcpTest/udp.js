import dgram from 'dgram'
let dgramServer = dgram.createSocket('udp4')
dgramServer.on('message', (msg, rinfo) => {
    console.log('server got:' + msg + 'from' + rinfo.address + ':' + rinfo.port)
})
dgramServer.on('listening',()=>{
    let address = dgramServer.address()
    console.log(`server listening ${address.address}:${address.port}${address.family}`)
})

dgramServer.bind(41234)