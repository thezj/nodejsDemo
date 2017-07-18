let log = (...parameter) => {
    console.log(...parameter)
}

const express = require('express')
const middleware = require('./middleware').setHeader
const middleware1 = require('./middleware.1').setHeader
const fs = require('fs')
const bodyParser = require('body-parser')

let app = express()
// app.use('/static',middleware)
app.use(bodyParser.raw({
    limit: 1000 * 100
}))


app.use((req, res, next) => {
    log('middle001')
    next()
})

app.get('/', [middleware, middleware1], (req, res, next) => {
    res.end('你好')
    next()
})

app.use((req, res, next) => {
    log('middle002')
    next()
})


app.post('/upload', (req, res) => {
    let file = fs.createWriteStream(`./file${(Math.random()+'').substring(2,7)}`)
    file.write(req.body, e => {
        if (!e) {
            file.end()
        }
    })
    res.send('文件上传成功')
})




app.listen(1717)