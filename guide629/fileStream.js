const fs = require('fs')
let log = (...parameter) => {
    console.log(...parameter)
}


//createReadStream
// let option = {
//     start: 0,
//     end: 2
// }
// let file = fs.createReadStream('./im.ha', option)

// file.on('open', fd => {
//     log('开始读取')
// })
// file.on('data', data => {
//     log('读取：', data, data.toString())

//     file.pause()
//     setTimeout(i => {
//         file.resume()
//     }, 1000)

// })
// file.on('end', fd => {
//     log('读完')
// })
// file.on('close', fd => {
//     log('关闭')
// })
// file.on('error', e => {
//     log('失败')
// })

// let option = {
//     flags: 'a'
// }

// let fileWrite = fs.createWriteStream('./im.ha', option)
// fileWrite.on('open', id => {
//     log('open')
// })
// fileWrite.write('1')
// fileWrite.write('2')
// fileWrite.write('3\n')
// log(fileWrite.write('4s是'))
// fileWrite.end('end', i => {
//     log('end', fileWrite.bytesWritten)
// // })
// let byteSize = 0
// let entry = fs.createReadStream('./im.ha')
// let out = fs.createWriteStream('./im.ha2')
// entry.on('data', d => {
//     let flag = out.write(d)
//     if (flag === false) {
//         byteSize += d.length / 1024
//         log('\n\n\n\操作系统缓存区已经被写满数据', d.length / 1024 + 'KB')
//     }
// })
// out.on('drain', i => {
//     log('操作系统缓存区中数据已全部输出','现在写入文件大小' + byteSize + 'KB')
// })
// out.on('error', i => {
//     log('写入文件发送错误')
// })
// out.end('',i=>{
//     log('end')
// })
// log(out.write('sss'),1111111111)



// let outIndex = 2
// let readmp3 = fs.createReadStream('./xx.pdf')
// readmp3.on('data', d => {
//     log(d.length)
//     let outmp3 = fs.createWriteStream(`./${outIndex++}.pdf`)
//     let flag = outmp3.write(d)
//     log(flag)
// })


let file = fs.createReadStream('./im.ha')
let outfile = fs.createWriteStream('./im.ha3')

file.pipe(outfile, {
    end: false
})
file.on('end', i => {
    outfile.end('byebye')
})