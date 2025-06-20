const express = require('express');
const routes = express.Router()


routes.get("/index", (req, res) =>{
    res.render("index")
})
routes.get('/books', (req, res) => {
    res.render('databases/books')
})
routes.get('/poems', (req, res) => {
    res.render('databases/poems')
})
routes.get('/essays', (req, res) => {
    res.render('databases/essays')
})
routes.get('/movies', (req, res) => {
    res.render('databases/movies')
})
routes.get('/sample', (req, res) => {
    res.render('sample')
})
routes.get('/collections', (req, res) => {
    res.render('collections')
})

module.exports = routes