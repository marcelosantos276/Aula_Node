const http = require('http')

const server = http. createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/html')
    res.end('<h1>Servidor está rodando dentro de Html</h1><p>Testando Atuaçlização</p>')
})

server.listen(8000,'localhost', () => {
    console.log("Servidor Rodando na Porta 8000")
})
