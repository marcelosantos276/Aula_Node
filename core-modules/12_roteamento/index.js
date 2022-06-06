const  fs  = require('fs')
const http = require('http')
const url = require('url')

const server = http. createServer((req, res) => {
    const rota = req.url
    if(rota === '/') {
        fs.readFile('./index.html', (err, data) => {
        res.writeHead(200, {'Content-type':'text/html'})
        res.write(data)
        return res.end()
        }) 
    } else if(rota === '/contato') {
        fs.readFile('./contato.html', (err, data) => {
        res.writeHead(200, {'Content-type':'text/html'})
        res.write(data)
        console.log(data)
        return res.end()
        }) 
    } else {
        fs.readFile('erro.html', (err, data) => {
            res.writeHead(404, {'Content-type':'text/html'})
            res.write(data)
            return res.end()
        })   
    }
})
server.listen(8000,'localhost', () => {
    console.log("Servidor Rodando na Porta 8000")
})