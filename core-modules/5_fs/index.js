const  fs  = require('fs')
const http = require('http')
const server = http. createServer((req, res) => {
    fs.readFile('mensagem.html', (err, data) => {
        res.writeHead(200, {'Content-type':'text/html'})
        res.write(data)
        return res.end()
    })
})
server.listen(8000,'localhost', () => {
    console.log("Servidor Rodando na Porta 8000")
})
