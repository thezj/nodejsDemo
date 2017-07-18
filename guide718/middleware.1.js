exports.setHeader = (req, res, next) => {
    console.log('middle_writeP')
    res.write('<p>im middleware</p>')
    next()
}