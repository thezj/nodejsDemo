// let str = '了了buffer'
// let buf = new Buffer(str,'utf-8')
// console.log(buf[3])
// buf[3] = 128
// console.log(buf,buf.length,buf.toString())
// console.dir(buf)

// import fs from 'fs'
// let rs = fs.createReadStream('./haha.opq')
// let rsData = ''
// rs.setEncoding('utf8')
// rs.on('data', chunk => {
//     console.log(chunk)
//     rsData += chunk
// })
// rs.on('end', () => {
//     console.log(rsData)
// })


import http from 'http'
let helloworld = ''
for (let i = 0; i < 1024 * 10; i++) {
    helloworld += 'a'
}
helloworld = new Buffer(helloworld)
http.createServer((req,res)=>{
    req.on('data',()=>{
        console.log('data')
    })
    res.writeHead(200)
    res.end(helloworld)
}).listen(8001)