const fs = require('fs')

// blocking synchronnous
/*const textIn = fs.readFileSync('input.txt', 'utf-8')
console.log(textIn)

const textOut = `This is what we know about the avocado: ${textIn}.\nCreate on ${Date.now()}`
fs.writeFileSync('output.txt',textOut);

console.log('File Written!')
 */
// block assynchronnous
fs.readFile('start.txt', 'utf-8', (err, data1) => {
    fs.readFile('input.txt', 'utf-8', (err, data2) => {
    console.log(data2)
        fs.readFile('output.txt', 'utf-8', (err, data3) => {
            console.log(data3)
        })
    })
})
console.log('Lendo arquivo!!!')
