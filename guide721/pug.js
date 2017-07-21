const express = require('express')
const pug = require('pug')
let app = express()


app.set('views', './') // 设置模版文件所在目录
app.set('view engine', 'pug') // 设置编译引擎


app.get('/', (req, res, next) => {
    res.render('template', {
        name: 'rider JIM',
        mymotor:['halley','ducati','bmw']
    })
})

app.listen(1717)