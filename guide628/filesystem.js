const fs = require('fs')
let log = i => {
    console.log(i)
}
// fs.readFile('./txt.ha', 'utf8', (err, data) => {
//     console.log(data)
//     fs.readFile('./txt.he', 'utf8', (err, data) => {
//         console.log(data)
//     })
// })
// console.log('读取文件')

// fs.readFile('./txt.ha','utf8',(e, d) => {
//     console.log(d)
// })


// let data = new Buffer('我是第一行\r\n我是第二行buf')
// let options = {
//     flag: 'a'
// }
// fs.writeFile('./write.ha', data, options, (e) => {
//     console.log('写入成功')
//     fs.readFile('./write.ha', 'utf8', (e, d) => {
//         console.log('内容：\n' + d)
//     })
// })

// fs.readFile('.//write.ha','utf16le',(e,d)=>{
//     // fs.writeFile('./caferacerCopyA.png',d.toString(),'utf16le',e=>{
//     //     console.log('复制成功')
//     // })
//     fs.appendFile('./write.haha',d.toString(),'utf16le',e=>{
//         console.log('追加文件操作成功')
//     })
// })

// fs.open('./txt.ha', 'r', (e, d) => {
//     let buf = new Buffer(255)
//     console.log(d)
//     fs.read(d, buf, 0, 9, 0, (e, byt, Buffer) => {
//         console.log(Buffer.slice(0, byt).toString())
//         fs.read(d, buf, 0, 3, null, (e, byt, Buffer) => {
//             console.log(Buffer.slice(0, byt).toString())
//         })
//     })

// })

// let buf = new Buffer('摩托车来的')
// fs.open('./txt.ha', 'w', (e, fd) => {
//     fs.write(fd, buf, 0, 9, 0, (e, written, buffer) => {
//         fs.write(fd, buf, 12, 3, null, (e, written, buffer) => {
//             console.log('写成功')
//             fs.fsync(fd)
//             fs.close(fd)
//         })
//     })
// })

// fs.mkdir('./img', e => {
//     console.log('ok')
//     fs.readdir('./img', (e, files) => {
//         console.log(files)
//     })
// })



// let path = './'
// let filenameArray = []
// let readdirdeep = path => {
//     let files = fs.readdirSync(path)
//     if (files.length) {
//         files.map(file => {
//             let filename = path + '/' + file
//             let filestat = fs.statSync(filename)
//             if (filestat.isFile()) {
//                 console.log(file)
//                 filenameArray.push(file)
//             } else {
//                 readdirdeep(filename)
//             }
//         })
//     }
// }
// readdirdeep(path)
// console.log(filenameArray.length)


// console.log(fs.existsSync('./img'))

// log(fs.realpathSync('img'))

// fs.chmod('./txt.ha','0600',e=>{
//     log('ok')
// })

// fs.rename('./txt.ha', './img/txt.ha', e => {
//     log('ok')
// })

// let realName = fs.realpathSync('./write.ha')
// console.log(realName)
// fs.symlink(realName, './link.hs', 'file', e => {
//     if (e) {
//         console.log(e)
//     }
//     // fs.readlink('./link.hs', (e, link) => {
//     //     if (e) {
//     //         console.log(e)
//     //     }
//     // })
//     // setTimeout(i => {
//     //     fs.unlink(realName + 'link')
//     // }, 1000)
// })

// fs.truncate('./txt.he', 1, e => {
//     if (e) {
//         log(e)
//     } else {
//         fs.stat('./txt.he', (e, stats) => {
//             console.log(stats)
//         })
//     }
// })

// fs.rmdir('./emptydir')

fs.watchFile('./watch.txt', (current, previous) => {
    let ctimed = Date.parse(previous.ctime)
    let ctime = Date.parse(current.ctime)
    if (ctimed === 0) {
        log('watch.txt 创建')
    } else if (ctime === 0) {
        log('watch.txt 删除')
        fs.unwatchFile("./watch.txt")
    } else if (ctime > ctimed) {
        log('watch.txt 修改')
    }
})