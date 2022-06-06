const fs = require('fs')
const http = require('http')
const server = http.createServer((req,res) =>{
    res.end('Servidor criado com sucesso!!!1')
})

console.log('inicio')

fs.writeFile('arquivo1.txt', 'oi', 'utf-8', (err, data) => {
    setTimeout(function ()  {
        console.log('Arquivo criado!')
    },5000)
})

server.listen(8124,'localhost', () => {
    console.log('Servidor rodando na porta 8124 - localhost:8124')
})