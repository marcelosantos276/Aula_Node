const fs = require('fs')
const http = require('http')
const url = require('url')

const replaceTemplate = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName)
    output = output.replace(/{%IMAGE%}/g, product.image)
    output = output.replace(/{%PRICE%}/g, product.price)
    output = output.replace(/{%FROM%}/g, product.from)
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrientes)
    output = output.replace(/{%QUANTITY%}/g, product.quantity)
    output = output.replace(/{%DESCRIPTION%}/g, product.description)
    output = output.replace(/{%ID%}/g, product.id)
    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic')
    return output
}

const tempCard = fs.readFileSync(`${__dirname}/dev-data/templates/template-card.html` , 'utf-8')
const tempOverview = fs.readFileSync(`${__dirname}/dev-data/templates/template-overview.html` , 'utf-8')
const tempProduct = fs.readFileSync(`${__dirname}/dev-data/templates/template-product.html` , 'utf-8')

const  data = fs.readFileSync(`${__dirname}/dev-data/data.json` , 'utf-8')
const dataObj = JSON.parse(data)

const server = http.createServer( (req , res) => { 
    const pathName = req.url

    // Overview page
    if(pathName === '/overview' || pathName === '/') {
        res.writeHead(200, { 'Content-Type' : 'text/html' })

        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('')
        const output = tempOverview.replace('{%PRODUCT_CARDS%}',cardsHtml)
        res.end(output)
        
    // Product Page
    } else if (pathName === '/product'){
        res.end(tempProduct)
    // Api page
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