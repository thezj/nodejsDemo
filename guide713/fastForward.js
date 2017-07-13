const mongo = require('mongodb')
const test = require('assert')

let log = (...parameter) => {
    console.log(...parameter)
}

let host = 'localhost'
let port = 27017

let dbServer = new mongo.Server(host, port, {
    auto_reconnect: true
})

let db = new mongo.Db('mongo', dbServer, {
    safe: true
})

db.open((e, db) => {
    test.equal(null, e)
    db.collections((e, collections) => {
        test.equal(null, e)
        log(collections.map(e => {
            return e.s.name
        }))


        db.collection('users', (e, collection) => {
            test.equal(null, e)

            collection.find({}).toArray((e, docs) => {
                test.equal(null, e)
                log('原始文档(test)：\n', docs)


                // collection.update({
                //     username: /aaa/
                // }, {
                //     $set: {
                //         username: 'test111',
                //         firstname: 'test111'
                //     }
                // }, {
                //     multi: true,
                //     upsert: true
                // }, (e, result) => {
                //     test.equal(null, e)
                //     log('成功更新文档数据', result.result)
                //     collection.find({}).toArray((e, docs) => {
                //         test.equal(null, e)
                //         log('更新后的数据', docs)
                //         db.close()
                //     })
                // })

                // collection.findAndModify({
                //     username: 'test111'
                // }, {
                //     username: -1
                // }, {
                //     username: 'modify'
                // }, {
                //     new: true
                // }, (e, doc) => {
                //     test.equal(null, e)
                //     log(doc)
                //     collection.find({}).toArray((e, docs) => {
                //         test.equal(null, e)
                //         log('更新后的数据', docs)
                //         db.close()
                //     })
                // })
                // collection.remove({
                //     username: /test|modify/
                // }, (e, result) => {
                //     test.equal(null, e)
                //     collection.find({}).toArray((e, docs) => {
                //         test.equal(null, e)
                //         log('更新后的数据: \n', docs)
                //         db.close()
                //     })
                // })

                // collection.findAndRemove({
                //     username: /JIM$/
                // }, {
                //     username: 1
                // }, (e, doc) => {
                //     test.equal(null, e)
                //     log('删除的文档', doc)
                //     db.close()
                // })

            })


        })

    })
})