let http = require('http')
let url = require('url')
let path = require('path')
let fs = require('fs')

let log = (...parameter) => {
    console.log(...parameter)
}


// let rootPath = path.resolve(__dirname, '../')
// let fileServer = (req, res) => {

//     let pathName = path.join(rootPath, url.parse(req.url).pathname)
//     let query = url.parse(req.url, true).query
//     log(url.parse(req.url, true))
//     log(pathName, query)
//     query.get && (pathName = pathName.replace('.jpg', '1.jpg'))
//     log('query pathName:', pathName)
//     if (url.parse(req.url).path === '/favicon.ico') return
//     let file = fs.createReadStream(pathName)
//     file.on('error', i => {
//         log(i)
//         res.setH
//         res.writeHead(400, {
//             'Content-Type': 'text/html;charset=utf-8'
//         })
//         res.end('找不到文件 - -！')
//     })
//     res.writeHead(200, {
//         'Content-Type': 'image/jpeg'
//     })
//     file.on('data', d => {
//         res.write(d)
//         log(d)
//     })

//     file.on('end', i => {
//         log('end')
//         res.end()
//     })
// }
// http.createServer(fileServer).listen(1717)


let parseCookie = cookie => {
    let cookies = {}
    if (cookie) {
        let list = cookie.split(';')
        for (let i = 0; i < list.length; i++) {
            let pair = list[i].split('=')
            cookies[pair[0].trim()] = pair[1]
        }
        return cookies
    } else {
        return cookie
    }
}

let formatCookie = (name, val, expires) => {
    return name + '=' + val + ';Expires=' + new Date(new Date().getTime() + 1000 * 60 * 60).toUTCString()
}

let fileServer = (req, res) => {
    if (url.parse(req.url).path === '/favicon.ico') return
    let rawCookie = parseCookie(req.headers.cookie)

    if (!rawCookie || !rawCookie.isVisit) {
        res.setHeader('Set-Cookie', formatCookie('isVisit', 1))
        res.writeHead(200, {
            'Content-Type': 'text/html;charset=utf-8'
        })
        res.end(`欢迎来到动物园,第一次`)
    } else {
        log(typeof rawCookie.isVisit, rawCookie.isVisit)
        let visitTime = +rawCookie.isVisit
        res.setHeader('Set-Cookie', formatCookie('isVisit', ++visitTime))
        res.writeHead(200, {
            'Content-Type': 'text/html;charset=utf-8'
        })
        res.end(`欢迎再次光临,第${visitTime}次`)
    }
}
http.createServer(fileServer).listen(1717)