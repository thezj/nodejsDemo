const express = require('express')
const cookieParser = require('cookie-parser')

let app = express()
app.use(cookieParser())
app.post('/cookieParser', (req, res) => {
    console.log(req.cookies)
    for (let property in req.cookies) {
        res.write(`${property}:${(req.cookies[property])}\n`)
    }
    res.end()
})
app.listen(1717)