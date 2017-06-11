import http from 'http'
import url from 'url'
import queryString from 'querystring'

let firstServer = http.createServer((request, response) => {
    request.setEncoding('utf8')
    let postData = ''
    request.on('data', function (chunk) {
        postData += chunk
    })
    request.on('end', () => {
        let params = queryString.parse(url.parse(request.url).query)
        let stringParams = JSON.stringify(params)
        let jsonPost = JSON.parse(postData)
        for (let value in jsonPost) {
            console.log(value)
        }
        response.end('urlquery:' + stringParams + 'jsonquery:' + postData)
    })
})
firstServer.listen(9090)
console.log('server on port:9090')