const express = require('express')

let app = express()

app.use((req, res, next) => {
    console.log('middleware001')
    next()
})

app.use(app.router)

app.use((req, res, next) => {
    console.log('middleware002')
    next()
})

app.get('/', (req, res, next) => {
    res.send('thugman')
    console.log('middleware_get')
    next()
})

app.listen(1717)