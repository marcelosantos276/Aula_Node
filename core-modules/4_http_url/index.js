const http = require('http')
const server = http. createServer((req, res) => {
    const urlInfo = require('url').parse(req.url,true)
    const name = urlInfo.query.name
    res.statusCode = 200
    res.setHeader('Content-Type','text/html','utf-8')
    if(!name){
        res.end(
            '<h1>Prewncha o formulário</h1><form method="GET"><input type="text" name="name"><input type="submit" value="Enviar">'
        )
    } else {
        res.end(`<h1>Seja bem vindo ${name}</h1>`)
    }  
})
server.listen(8000,'localhost', () => {
    console.log("Servidor Rodando na Porta 8000")
})
