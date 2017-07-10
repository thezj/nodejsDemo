// const crypto = require('crypto')
// let md5 = crypto.createHash('md5')

// md5.update('我是data1', 'utf8')
// let output = md5.digest('base64')
// console.log(output)

const dns = require('dns')

let log = (...parameter) => {
    console.log(...parameter)
}

// //获取baidu域名的所有ipv4地址
// dns.resolve('www.163.com', 'A', (e, address) => {
//     log(address)
// })
// //便捷方法
// dns.resolve4('www.163.com', (e, address) => {
//     log(address)
// })
// dns.lookup('www.163.com', 4, (e, address, family) => {
//     log(family, address)
// })

// //反向解析ip到域名
// dns.reverse('180.97.33.107', (e, domain) => {
//     log(domain)
// })

const os = require('os')
const cp = require('child_process')

//pause

// let cp1 = cp.exec('C:/windows/explorer.exe ' + os.tmpdir())
// log(cp1)
// cp1.kill()
// log(os.tmpdir())
// log(os.endianness())
// log(os.hostname())
// log(os.type())
// log(os.platform())
// log(os.arch())
// log(os.release())
// log(os.uptime() / 60 / 60)
// log(os.loadavg())
// log(os.totalmem() / 1024 / 1024)
// log(os.freemem() / 1024 / 1024)
// log(os.cpus()[0].speed)
// // log(os.networkInterfaces())
// log(os.EOL.toString())

const readline = require('readline')
// let completer = line => {
//     let completions = 'help error quit aaa bbb ccc'.split(' ')
//     let hits = completions.filter(c => {
//         return c.indexOf(line) === 0
//     })
//     return [hits, line]
// }
// let rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     completer
// })
// rl.on('close', i => {
//     log('行数据读取操作被终止')
// })
// rl.on('line', line => {
//     if (['exit', 'quit', 'q'].includes(line)) {
//         rl.close()
//     } else {
//         log('你输入了', line)
//     }
// })

const fs = require('fs')
const path = require('path')

// let outfilepath = path.join(process.cwd(), 'anotherjs.t')
// //读取自生文件
// let file = fs.createReadStream(process.argv[1])
// let out = fs.createWriteStream(outfilepath)

// let index = 1
// out.write('line' + index.toString() + ':')
// index++
// let rl = readline.createInterface({
//     input: file,
//     output: out,
//     terminal: true
// })
// rl.on('pause', i => {
//     log('数据读取暂停')
// })
// rl.on('close', i => {
//     log('行数据读取终止')
// })


// //pause



// rl.on('line', line => {
//     out.write('line' + index.toString() + ':')
//     index++
//     if (line == '//pause') {
//         rl.write('rl.write=====================')
//         rl.pause()
//     }
//     if (line === '//exit') {
//         rl.close()
//     }
// })

const util = require('util')
// util.debug('ds')
// util.errot('ds')
// util.puts([1,2,3])

// util.inspect.style.string = 'red'
// console.log({a:'sdf'})


const vm = require('vm')
// let i = 0
// vm.runInThisContext('e = e +1')

// vm.runInThisContext('let i = 0')
// vm.runInThisContext('i = i +1')
// vm.runInThisContext('console.log(i)')
let obj = {
    i: 0
}
vm.runInNewContext('i= i+1', obj)
vm.runInContext('i= i+1', obj)
log(obj)