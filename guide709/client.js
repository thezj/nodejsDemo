const http = require('http')

for (let i = 0; i < 100; i++) {
    http.get('http://127.0.0.1:1717#' + Math.random(), res => {
        res.on('data', data => {
            console.log(data.toString())
        })
    })
}