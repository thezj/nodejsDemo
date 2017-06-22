
let timer = setInterval(msg => {
    console.log(msg)
}, 1000, 'im a interval')
setTimeout(() => {
    timer.unref()
    
}, 5000)


import './testModule'
import './testModule'
let path = require.resolve('./testModule')
let cache = require.cache
console.log(path,typeof(cache))
delete require.cache[path]
import './testModule'
import './testModule'
import './testModule'

console.log(__dirname,__filename)



