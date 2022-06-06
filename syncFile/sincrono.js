const fs = require('fs')

console.log('inicio')

fs.writeFileSync('arquivo.txt','Arquivo no modo sync')

console.log('fim')

