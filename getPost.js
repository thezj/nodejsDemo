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
        var jsonParams = JSON.stringify(params)
        response.end(jsonParams)
    })
})
firstServer.listen(9090)