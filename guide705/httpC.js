const request = require('request')
const http = require('http')
let log = (...parameter) => {
    console.log(...parameter)
}


let showImg = imgs => {
    http.createServer((req, res) => {
        res.writeHead(200, {
            'Content-Type': 'text/html;charset=UTF-8'
        })
        imgs.map(imgsrc => {
            res.write(`<img src=${imgsrc}>`)
        })
        res.end()
    }).listen(1717)
}

let urlx = ['http://desk.zol.com.cn/bizhi/4036_499', 66, '_2.html']
let allbigimg = []
let findbigimg = url => {
    let req = request(url)
    let buffers = [],
        imgsrcs = [],
        bigimgs = []
    req.on('data', chunk => {
        buffers.push(chunk)
    })
    req.on('end', i => {
        let dataString = Buffer.concat(buffers).toString()
        let imgs = dataString.match(/<img[^>]*>/g)
        imgs.map(img => {
            let src = /src="[^"]*"/g.exec(img)
            if (src) {
                imgsrcs.push(src[0].slice(5, -1))
            }
        })
        let getCount = 0
        imgsrcs.map(img => {
            if (img.length) {
                getCount++
                let req = request(img)
                let chunk = []
                req.on('data', c => {
                    chunk.push(c)
                })
                req.on('end', c => {
                    let data = Buffer.concat(chunk)
                    if (data.length > 80000) {
                        bigimgs.push(img)
                    }
                    getCount--
                    if (getCount === 0) {
                        if (bigimgs.length) {
                            log('找到大图：', bigimgs)
                            allbigimg = allbigimg.concat(bigimgs)
                            urlx[1]++;
                            log(urlx.join(""))
                            findbigimg(urlx.join(""))
                        } else {
                            log('已经没有图了')
                            log(allbigimg)
                            showImg(allbigimg)
                        }
                    }
                })
            }
        })
    })
}
log(urlx.join(""))
findbigimg(urlx.join(""))