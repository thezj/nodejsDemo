const fs = require('fs')
let out = fs.createWriteStream('./message.txt')
process.stdin.on('data', data => {
    out.write(data)
})
process.stdin.on('end', data => {
    process.exit()
})