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

let server = new mongo.Server(host, port, {
    auto_reconnect: true
})

let db = new mongo.Db('mongo', server, {
    safe: true
})

db.open((e, db) => {
    db.collection('users', (e, collection) => {
        collection.insert({
            username: 'JIM',
            age: 88
        }, (e, docs) => {
            log(docs)
            db.close()
        })
    })
})