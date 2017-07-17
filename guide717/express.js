const express = require('express')
const fs = require('fs')
const querystring = require('querystring')
const mysql = require('mysql')

let log = (...parameter) => {
    console.log(...parameter)
}

let app = express()
// app.get('/*.node/:name?/:gender?', (req, res) => {
//     // res.writeHead(200, {
//     //     'Content-Type': 'text/html;charset=UTF-8'
//     // })
//     // res.end('你好啊')

//     res.send(`${req.params.name}(${req.params.gender}),你好呀`)
// })
// app.listen(1717, '127.0.0.1')

// app.get('/a/:id(\\d+)/', (req, res) => {
//     res.send(`你好呀`)
// })
// app.listen(1717, '127.0.0.1')

let pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    database: 'jimsql',
    user: 'root',
    password: 'asdasd'
})

app.all('/index.html/:id(\\d+)', (req, res, next) => {
    pool.getConnection((e, connection) => {
        if (!e) {
            connection.query('select count(1) from users where user_id=?', [req.params.id], (e, result) => {
                if (!e) {
                    if (result[0]['count(1)'] > 0) next()
                    else res.send('您没有操作数据表的权限')
                } else {
                    log(e)
                }
            })
        } else {
            log(e)
        }
    })
})

app.get('/index.html/:id(\\d+)', (req, res) => {
    // res.writeHead(200, {
    //     'Content-Type': 'text/html;charset=UTF-8'
    // })
    // let file = fs.createReadStream('./index.html')
    // file.pipe(res)
    res.sendFile(__dirname + '/index.html')
})

app.get('/showAll', (req, res) => {
    pool.getConnection((e, connection) => {
        if (!e) {
            connection.query('select * from users', (e, result) => {
                let str = ''
                result.map(e => {
                    str += `<p>firstname:${e.firstname},username:${e.username}</p>`
                })
                connection.release()
                res.send(str)
            })
        }
    })
})

app.post('/index.html', (req, res) => {
    req.on('data', data => {
        let dataObj = querystring.parse(data.toString())
        pool.getConnection((e, connection) => {
            if (!e) {
                connection.query('insert into users set ?', {
                    username: dataObj.username,
                    firstname: dataObj.firstname
                }, (e, result) => {
                    if (!e) {
                        connection.release()
                        res.send('插入数据成功')
                    }
                })
            }
        })
    })
})

app.put('/index.html', (req, res) => {
    req.on('data', raw => {
        let data = JSON.parse(raw.toString())
        log(raw.toString())
        pool.getConnection((e, connection) => {
            if (!e) {
                connection.query('insert into users set ?', {
                    username: data.username,
                    firstname: data.firstname
                }, (e, result) => {
                    if (!e) {
                        connection.query('select * from users', (e, result) => {
                            if (!e) {
                                let str = ''
                                result.map(e => {
                                    str += `<p>firstname:${e.firstname},username:${e.username}</p>`
                                })
                                connection.release()
                                res.send(str)
                            }
                        })
                    }
                })
            }
        })
    })
})

app.delete('/index.html', (req, res) => {
    req.on('data', raw => {
        let data = JSON.parse(raw.toString())
        pool.getConnection((e, connection) => {
            if (!e) {
                connection.query('delete from users where username=? and firstname=?', [data.username, data.firstname], (e, result) => {
                    if (!e) {
                        connection.query('select * from users', (e, result) => {
                            if (!e) {
                                let str = ''
                                result.map(e => {
                                    str += `<p>firstname:${e.firstname},username:${e.username}</p>`
                                })
                                connection.release()
                                res.send(str)
                            }
                        })
                    }
                })
            }
        })
    })
})



app.listen(1717, '127.0.0.1')