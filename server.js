const http = require('http')
// const app = require('./app')
require('dotenv').config()
const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const flash = require('connect-flash')
const session = require('express-session')
const bodyParser = require('body-parser')
const passport = require('passport')
const THREE = require('three')

app.set('view engine', 'ejs')
app.set('views', (path.join(__dirname, 'views')))

app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
}))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/'));

app.get("/", (req, res) =>{
    res.render("home")
})


const server = http.createServer(app)
const port = process.env.PORT || 5553

server.listen(port)
console.log(`Listeningggg on port ${port}.`)

console.log("Hey! what's going on?")