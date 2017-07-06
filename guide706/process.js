const process = require('process')
const cp = require('child_process')
const fs = require('fs')
let log = (...parameter) => {
    console.log(...parameter)
}

// log('运行程序的exe的绝对路径')
// log(process.execPath)
// log('nodejs的版本号')
// log(process.version)
// log('当前平台')
// log(process.platform)
// log('命令行参数')
// log(process.argv)
// log('操作系统的环境信息')
// log(process.env.NODE_PATH)
// log('编译当前可执行文件的配置')
// log(process.config.variables.debug_devtools)
// log('运行当前程序的进程的PID')
// log(process.pid)
// log('命令行窗口标题')
// log(process.title)
// log('处理器架构')
// log(process.arch)

//进程中输入数据
// process.stdin.resume()
// process.stdin.on('data', chunck => {
//     process.stdout.write(chunck)
// })


// let file = fs.createReadStream('./hah.ha')
// file.on('data', d => {
//     log(d.length)
// })

// //将函数推迟到代码中所编写的下一个异步方法的事件回调函数开始执行时调用
// process.nextTick(i => {
//     log('nextTick1')
// })

// let memoryusage = process.memoryUsage()
// for (let index in memoryusage) {
//     log(index + ':' + Math.floor(memoryusage[index] / 1024 / 1024) + 'M')
// }

// log(process.cwd() === __dirname)
// process.chdir('../')
// log(process.cwd() === __dirname)
// process.kill(5068)
// log(process.uptime())
// process.on('exit', i => {
//     log('nodejs进程退出')
// })
// let time = process.hrtime()
// let data = fs.readFileSync('./xx.pdf')
// log(data.length)
// let diff = process.hrtime(time)
// log(diff[1] / 1000000, 'ms')

let cp1option = {
    cwd: './test'
}
let cp1 = cp.spawn('node', ['test1.js', 'one', 'two'], cp1option)
let cp2option = {
    stdio: 'pipe'
}
let cp2 = cp.spawn('node', ['test2.js'], cp2option)

cp1.stdout.on('data', data => {
    cp1.kill()
    log('子进程标准输出：', data.toString())
    cp2.stdin.write(data)
    
})

cp1.on('exit', (code, signal) => {
    log('子进程退出，退出码：', code,signal)
    process.exit()
})