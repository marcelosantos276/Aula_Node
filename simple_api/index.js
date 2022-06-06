const fs = require('fs')
const http = require('http')
const url = require('url')

const data = fs.readFileSync(`${__dirname}/dev-data/data.json` , 'utf-8')
const dataObj = JSON.parse(data)


const server = http.createServer( (req , res) => { 
    const pathName = req.url
    if(pathName === '/overview' || pathName === '/') {
        res.end('Bem vindo Overview')
    } else if (pathName === '/product'){
        res.end('Esta é Produto')
    }else if (pathName === '/api'){
        res.writeHead(200, {'Content-Type' : 'application/json'})
        res.end(data)
        /* fs.readFile(`${__dirname}/dev-data/data.json` , 'utf-8', (err, data) => {
            const productData = JSON.parse(data)
            res.writeHead(200, {'Content-Type' : 'application/json'})
            res.end(data)
        }) */
    } else {
        res.writeHead(404, {'Content-type' : 'text/html'})
        res.end('<h3>Nao Encontrado</h3>')
    }
})

server.listen(8124, 'localhost', () => {
    console.log('Servdiro rodando localhost:8124')
})