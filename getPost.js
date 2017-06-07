var http = require('http')
var url = require('url')
var queryString = require('querystring')
var firstServer = http.createServer((request, response) => {
    request.setEncoding('utf8')
    var postData = ''
    request.on('data', function (chunk) {
        postData += chunk
    })
    request.on('end', function () {
        var params = queryString.parse(url.parse(request.url).query)
        var stringParams = JSON.stringify(params)
        var jsonPost = JSON.parse(postData)
        for(value in jsonPost){
            console.log(value)
        }
        response.end('urlquery:'+stringParams+'jsonquery:'+postData)
    })
})
firstServer.listen(9090)
console.log('test git')