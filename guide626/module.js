import {
    name
} from './foo.js'
import {
    name as name2
} from './foo.1.js'
// import {
//     name
// } from './node_modules/foo/lib/foo.js'
import {
    namex
} from 'foo'
console.log(name,name2,namex)
console.log(module.id,module.filename,module.children,module.loaded,module.parent)
