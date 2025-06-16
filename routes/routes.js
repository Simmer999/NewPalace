const express = require('express');
const routes = express.Router()


routes.get("/index", (req, res) =>{
    res.render("index")
})
routes.get("/collections", (req, res) =>{
    res.render("collections")
})
routes.get('/books', (req, res) => {
    res.render('books')
})
routes.get('/bookDetails', (req, res) => {
    res.render('bookDetails')
})
routes.get('/poems', (req, res) => {
    res.render('poems')
})
routes.get('/essays', (req, res) => {
    res.render('essays')
})
routes.get('/sample', (req, res) => {
    res.render('sample')
})


module.exports = routes