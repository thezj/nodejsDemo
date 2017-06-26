import http from 'http'
let requestOption = {
    port: 8888,
    method: 'POST'
}
let request = http.request(requestOption, res => {
    res.on('data', data => {
        console.log(data.toString())
    })
})

let num = 0

request.write('hello ' + num++)
request.write('hello ' + num++)
request.write('hello ' + num++)
setTimeout(() => {
    request.write('hello ' + num++)
}, 2000)