const http = require('http')
const app = require('./app')


const server = http.createServer(app)
const port = process.env.PORT || 5553

server.listen(port)
console.log(`Listeningggg on port ${port}.`)