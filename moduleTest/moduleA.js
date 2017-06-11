import ajson from './imajson'
//模块定义
let moduleA = () => {
    return ajson.name+'im moduleA.js\n'
}
export {
    moduleA
}