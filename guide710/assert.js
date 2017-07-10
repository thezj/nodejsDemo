const assert = require('assert')

let i = 0

let testfun = x => {
    i++
    throw new Error('im a error')
}
let errorHandle = e => {
    console.log(e)
    return true
}

assert.doesNotThrow(testfun, errorHandle, 'throw a error')