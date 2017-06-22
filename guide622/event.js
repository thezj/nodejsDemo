import http from 'http'
import events from 'events'
let server = http.createServer()
server.on('newListener',(e,f)=>{
    console.log(`对${e}事件添加处理函数${f}`)
})
server.on('customEvent',(...parameter)=>{
    console.log(parameter)
})
server.on('customEvent',(...parameter)=>{
    console.error(parameter)
})
let i = 0
setInterval(()=>{
server.emit('customEvent',`自定义参数${i++}`)
},1000)
let handleAmount = events.EventEmitter.listenerCount(server,'customEvent')
console.log(`对象server对事件customEvent的处理函数数量为${handleAmount}`)


server.listen(9999)