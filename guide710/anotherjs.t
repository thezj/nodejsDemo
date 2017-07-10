line1:// const crypto = require('crypto')
line2:// let md5 = crypto.createHash('md5')
line3:
line4:// md5.update('我是data1', 'utf8')
line5:// let output = md5.digest('base64')
line6:// console.log(output)
line7:
line8:const dns = require('dns')
line9:
line10:let log = (...parameter) => {
line11:    console.log(...parameter)
line12:}
line13:
line14:// //获取baidu域名的所有ipv4地址
line15:// dns.resolve('www.163.com', 'A', (e, address) => {
line16://     log(address)
line17:// })
line18:// //便捷方法
line19:// dns.resolve4('www.163.com', (e, address) => {
line20://     log(address)
line21:// })
line22:// dns.lookup('www.163.com', 4, (e, address, family) => {
line23://     log(family, address)
line24:// })
line25:
line26:// //反向解析ip到域名
line27:// dns.reverse('180.97.33.107', (e, domain) => {
line28://     log(domain)
line29:// })
line30:
line31:const os = require('os')
line32:const cp = require('child_process')
line33:
line34://pause
line35:rl.write=====================
line36:
line37:// let cp1 = cp.exec('C:/windows/explorer.exe ' + os.tmpdir())
line38:// log(cp1)
line39:// cp1.kill()
line40:// log(os.tmpdir())
line41:// log(os.endianness())
line42:// log(os.hostname())
line43:// log(os.type())
line44:// log(os.platform())
line45:// log(os.arch())
line46:// log(os.release())
line47:// log(os.uptime() / 60 / 60)
line48:// log(os.loadavg())
line49:// log(os.totalmem() / 1024 / 1024)
line50:// log(os.freemem() / 1024 / 1024)
line51:// log(os.cpus()[0].speed)
line52:// // log(os.networkInterfaces())
line53:// log(os.EOL.toString())
line54:
line55:const readline = require('readline')
line56:// let completer = line => {
line57://     let completions = 'help error quit aaa bbb ccc'.split(' ')
line58://     let hits = completions.filter(c => {
line59://         return c.indexOf(line) === 0
line60://     })
line61://     return [hits, line]
line62:// }
line63:// let rl = readline.createInterface({
line64://     input: process.stdin,
line65://     output: process.stdout,
line66://     completer
line67:// })
line68:// rl.on('close', i => {
line69://     log('行数据读取操作被终止')
line70:// })
line71:// rl.on('line', line => {
line72://     if (['exit', 'quit', 'q'].includes(line)) {
line73://         rl.close()
line74://     } else {
line75://         log('你输入了', line)
line76://     }
line77:// })
line78:
line79:const fs = require('fs')
line80:const path = require('path')
line81:
line82:let outfilepath = path.join(process.cwd(), 'anotherjs.t')
line83://读取自生文件
line84:let file = fs.createReadStream(process.argv[1])
line85:let out = fs.createWriteStream(outfilepath)
line86:
line87:let index = 1
line88:out.write('line' + index.toString() + ':')
line89:index++
line90:let rl = readline.createInterface({
line91:    input: file,
line92:    output: out,
line93:    terminal: true
line94:})
line95:rl.on('pause', i => {
line96:    log('数据读取暂停')
line97:})
line98:rl.on('close', i => {
line99:    log('行数据读取终止')
line100:})
line101:
line102:
line103://pause
line104:rl.write=====================
line105:
line106:
line107:
line108:rl.on('line', line => {
line109:    out.write('line' + index.toString() + ':')
line110:    index++
line111:    if (line == '//pause') {
line112:        rl.write('rl.write=====================')
line113:        rl.pause()
line114:    }
line115:    if (line === '//exit') {
line116:        rl.close()
line117:    }
line118:})