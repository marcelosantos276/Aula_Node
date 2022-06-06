const http = require('http')
const server = http.createServer()

server.on('request', function (request, response) {
    console.log('request event')
    response.writeHead(200, {'Content-type' : 'text/plain'})
    response.end('Hello Wolrd')
})

server.on('connection', function() {
    console.log('connection event')
})

server.listen('8124', function() {
    console.log('listening event')
})

console.log('server running on port 8124')