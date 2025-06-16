require('dotenv').config()
const express = require('express')
const app = express()
const route = express.Router()
const ejs = require('ejs')
const path = require('path')
const bodyParser = require('body-parser')


// const mongoose = require('mongoose')
// mongoose.set('strictQuery', true);
// mongoose.connect(process.env.DB, {
//     useNewUrlParser: true, 
//     useUnifiedTopology : true
// })
// const db = mongoose.connection
// db.on('error', console.log.bind(console, 'connection error'))
// db.once('open', (callback) => {
//     console.log('Connected to MongoDB #1.')//----------------------
// })

app.use('/', require('./routes/mongoose'))
app.use(express.static(__dirname + '/'));
app.use('/', require('./routes/routes'))
app.use('/', require('./routes/books'))
app.use('/', require('./routes/poems'))
app.use('/', require('./routes/essayCols'))
app.use('/', require('./routes/movies'))

app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')
app.set('views', (path.join(__dirname, 'views')))

app.get("/", (req, res) =>{
    res.render("index")
})

module.exports = app
