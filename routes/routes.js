const express = require('express');
const routes = express.Router()

// get routes
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

//post routes


module.exports = routes









routes.get('/collections', (req, res) => {
    res.render('collections')
})