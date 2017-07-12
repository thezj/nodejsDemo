let log = (...parameter) => {
    console.log(...parameter)
}

const mongo = require('mongodb')

let host = 'localhost'
let port = 27017

// let server = new mongo.Server(host, port, {
//     auto_reconnect: true
// })

// let db = new mongo.Db('mongo', server, {
//     safe: true
// })

// db.open((e, db) => {
//     if (e) {
//         log(e)
//     } else {
//         log('成功建立数据库链接')
//         db.close()
//     }
// })

// let server = new mongo.Server(host, port, {
//     auto_reconnect: true
// })

// let db = new mongo.Db('mongo', server, {
//     safe: true
// })

// db.open((e, db) => {
//     db.collection('users', (e, collection) => {
//         collection.insert({
//             username: 'JIM',
//             age: 88
//         }, (e, docs) => {
//             log(docs)
//             db.close()
//         })
//     })
// })


let server = new mongo.Server(host, port, {
    auto_reconnect: true
})

let db = new mongo.Db('mongo', server, {
    safe: true
})

// db.open((e, db) => {
//     db.collection('users', (e, collection) => {
//         if (e) log(e)
//         else {
//             collection.find({
//                 $or: [{
//                     username: /4/,
//                     age: {
//                         $lt: 90
//                     }
//                 }, {
//                     username: /3/,
//                     $or: [{
//                             age: {
//                                 $lt: 90
//                             }
//                         },
//                         {
//                             age: {
//                                 $gt: 91
//                             }
//                         }
//                     ]
//                 }]
//             }).toArray((e, docs) => {
//                 if (e) log(e)
//                 else {
//                     log(docs)
//                     db.close()
//                 }
//             })
//         }
//     })
// })

// let article1 = {
//     name: 'TV',
//     tags: ['device', 'electric equipment']
// }
// let article2 = {
//     name: 'apple',
//     tags: ['fruit', 'food', 'citrus']
// }
// let article3 = {
//     name: 'Node.js',
//     tags: ['language', 'web', 'computer']
// }
// let docs = [article1, article2, article3]



let food1 = {
    type: 'food',
    price: 1
}
let food2 = {
    type: 'food',
    price: 1
}
let food3 = {
    type: 'food',
    price: 1
}
let food4 = {
    type: 'food4',
    price: 1
}
let bood1 = {
    type: 'book',
    price: 11
}
let bood2 = {
    type: 'book',
    price: 11
}
let bood3 = {
    type: 'book',
    price: 11
}
let bood4 = {
    type: 'book',
    price: 11
}
let foods = [food1, food2, food3, food4]
let books = [bood1, bood2, bood3, bood4]
let docs = [{
    name: 'store1',
    goods: foods
}, {
    name: 'store2',
    goods: books
}]
db.open((e, db) => {
    db.collection('users', (e, collection) => {
        // collection.insert(docs, (e, docs) => {
        //     if (e) log(e)
        //     log(docs)
        //     db.close()
        // })

        collection.findOne({
            age: {
                $gt: 90
            }
        }, (e, docs) => {
            log(docs)
        })

        let result = collection.find({
            // 'goods.type': /food/
            // username:'JIM1'
        }, {
            // fields: {
            //     _id: 0
            // },
            // //如果多个排序字段则按优先级，第一个字段排序完成后，在排序条件相同情况下再按下一个字段进行排序
            // sort: {
            //     age: 1,
            //     username: -1,
            // },
            // limit: 6,
            // skip: 1,
            hint: {
                age: -1
            },
            max: {
                age: 90
            },
            min: {
                age: 92
            },
            returnKey: true,
            // explain: true
            raw: true
        })
        result.toArray((e, docs) => {
            log(docs)
        })
        db.close()

    })
})