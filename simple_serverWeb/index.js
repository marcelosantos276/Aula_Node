const http = require('http')

const server = http.createServer( (req , res) => { 
    res.end("Ola bem vindo ao servidor")
})

server.listen(8124, 'localhost', () => {
    console.log('Servdiro rodando localhost:8124')
})