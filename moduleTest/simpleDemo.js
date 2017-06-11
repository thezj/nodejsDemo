//引用模块
import {moduleA} from './moduleA'
//模块定义
let stringA = moduleA()
let functionB = () => {
    return stringA + 'im simpleDemo.js\n'
}
export {
    functionB
}