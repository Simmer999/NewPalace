require('dotenv').config()
const express = require('express')
const app = express()
const route = express.Router()
const router = express.Router()
const ejs = require('ejs')
const path = require('path')
const bodyParser = require('body-parser')


const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB, {
    useNewUrlParser: true, 
    useUnifiedTopology : true
})
const db = mongoose.connection
db.on('error', console.log.bind(console, 'connection error'))
db.once('open', (callback) => {
    console.log('Connected to MongoDB #1 from routes/mongoose.js.')//           <----------------------
})

router.get('/', (req, res) => {
    db.collection('Books')// See const users = db.collection('users')
    .find()
    .toArray()
    .then(results => {
        //In order to print the contents of the database to the console:
        // console.log(results)
        res.render('index', { Books: results })// Books vs entries
    })
    .catch(error => console.error(error))
})
module.exports = router