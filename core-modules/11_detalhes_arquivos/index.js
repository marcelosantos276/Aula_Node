const fs = require('fs')

fs.stat('novoarquivo.txt', (err, stats) => {
    if(err){
        console.log(err)
        return
    }
    console.log(stats.isDirectory())
    console.log(stats.isFile())
    console.log(stats.size)
    console.log(stats.ctime)
})