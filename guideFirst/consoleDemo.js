console.time('small loop')
for(let i = 0;i<100000;i++){
    ++i
    if (i === 9999){
        console.trace('trace')
    }
}
console.timeEnd('small loop')