const http = require('http')
const url = require('url')

const server = http.createServer( (req , res) => { 
    const pathName = req.url
    if(pathName === '/overview' || pathName === '/') {
        res.end('Bem vindo Overview')
    } else if (pathName === '/product'){
        res.end('Esta é Produto')
    } else {
        res.writeHead(404, {'Content-type' : 'text/html'})
        res.end('<h3>Nao Encontrado</h3>')
    }
})

server.listen(8124, 'localhost', () => {
    console.log('Servdiro rodando localhost:8124')
})