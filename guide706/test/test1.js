process.stdout.write('子进程当前的工作目录为：' + __dirname + '\n')
process.argv.forEach((val, index) => {
    process.stdout.write(`命令行参数[${index}]:${val}\n`)
});
process.stdout.write('输出完毕')