//引用模块
import {
    functionB
} from './simpleDemo'

console.log(functionB() + 'im last moduleC.js\n', '__filename', __filename, '\n', '__dirname', __dirname, '\n', 'require', require, '\n', 'export', exports, '\n', 'module', module)