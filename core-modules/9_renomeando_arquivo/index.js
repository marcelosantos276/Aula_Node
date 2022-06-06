const fs = require('fs')

const arqAntigo = 'arquivo.txt'
const arqNovo = 'arquivo_renomeado.txt'

//fs.rename('arquivo.txt','arquivo_renomeado.txt', (err) => {
fs.rename(arqAntigo,arqNovo, (err) => {
    if(err){
        console.log(err)
    } else {
        console.log(`O arquivo ${arqAntigo} foi renomeado para ${arqNovo}`)
    }
})