const mysql = require('mysql')

let log = (...parameter) => {
    console.log(...parameter)
}

let connectionOption = {
    host: 'localhost',
    port: 3306,
    database: 'jimsql',
    user: 'root',
    password: 'asdasd',
    multipleStatements: true
}

let connection = mysql.createConnection(connectionOption)

connection.connect(e => {
    if (!e) {
        log('与mysql数据库链接成功')


        // connection.query('INSERT INTO users SET ?', {
        //     username: 'JIM',
        //     firstname: '陆小凤5'
        // }, (e, result) => {
        //     if (!e) {
        //         connection.query('SELECT * FROM ??', ['users'], (e, result) => {
        //             if (!e) {
        //                 log(JSON.stringify(result))

        //                 connection.end(e => {
        //                     if (!e) {
        //                         log('关闭mysql数据库操作成功')
        //                     }
        //                 })
        //             }
        //         })
        //     } else {
        //         log(e, result)
        //     }
        // })


        //修改数据
        connection.query('update users set firstname = ? where user_id = ?', ['陆小凤4', 4], (e, result) => {
            if (e) {
                log(e)
            } else {
                connection.query('delete from users where user_id = ?',7, (e, result) => {
                    if (e) {
                        log(e)
                    } else {
                        log('删除数据成功')
                        connection.end()
                    }
                })
            }
        })


    }
})