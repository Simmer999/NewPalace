const express = require('express');
const route = express.Router()

route.get('/books', (req, res) => {
    res.render('books')
})




module.exports = routes