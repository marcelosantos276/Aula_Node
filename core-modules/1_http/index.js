const http = require('http')

const server = http. createServer((req, res) => {
    res.write('Servidor Rodando')
    res.end()
})

server.listen(8000,'localhost', () => {
    console.log("Servidor Rodando na Porta 8000")
})
