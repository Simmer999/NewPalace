require('dotenv').config()
const express = require('express')
const app = express()
const route = express.Router()
const ejs = require('ejs')
const path = require('path')
const bodyParser = require('body-parser')


app.set('view engine', 'ejs')
app.set('views', (path.join(__dirname, 'views')))

app.use(express.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(express.static(__dirname + '/'));

console.log("Hey! what's going on?")
app.get("/", (req, res) =>{
    res.render("index")
})
console.log("Hey! what's going on?")

module.exports = app
