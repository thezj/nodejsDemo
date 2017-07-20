const express = require('express')
const parseurl = require('parseurl')
const session = require('express-session')
const serveIndex = require('serve-index')
const serveStatic = require('serve-static')
const path = require('path')
const fs = require('fs')

let app = express()

app.use(session({
    secret: 'hello kitty',
    resave: false,
    saveUninitialized: true
}))

app.use((req, res, next) => {
    let views = req.session.views
    if (!views) {
        views = req.session.views = {}
    }
    console.log(parseurl(req))
    let pathname = parseurl(req).pathname
    views[pathname] = (views[pathname] || 0) + 1
    next()
})

app.get('/foo', (req, res, next) => {
    res.send(`you viewed this page ${req.session.views['/foo']} times`)
})

app.get('/bar', (req, res, next) => {
    console.log(req.session.views['/bar'], typeof req.session.views['/bar'], req.session.cookie.maxAge)
    if (req.session.views['/bar'] >= 5) {
        req.session.cookie.maxAge = 1000
    }
    res.send(`you viewed this page ${req.session.views['/bar']} times`)

})

let ftpPath = path.resolve(__dirname, '../')
app.use('/ftp', serveIndex(ftpPath, {
    'icons': true
}))
app.use((req, res, next) => {
    let filePathArray = parseurl(req).pathname.split('/')
    filePathArray.shift()
    filePathArray.shift()
    let filePath = path.resolve(__dirname, '../', filePathArray.join('/'))
    console.log(filePath, fs.statSync(filePath).isFile())
    if (fs.statSync(filePath).isFile()) {
        res.sendFile(filePath)
    }
})
// app.use(serveIndex(ftpPath, {
//     'index': ['default.html', 'default.htm']
// }))

app.listen(1717)