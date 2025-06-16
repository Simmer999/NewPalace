const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

var db = mongoose.connection;









router.get('/retrieved_poem', (req, res) => {
    db.collection('Poems')
    .find()
    .toArray()
    .then(results => {
        //In order to print the contents of the database to the console:
        // console.log(results)
        res.render('retrieved_poem', { poems: results })  
    })
    .catch(error => console.error(error))
})

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const poems = require('../models/poems');






console.log("here?")

// 20=================== Standard GET and POST.
// router.get('/poems', (req, res) => {
//     res.render('new_poem')
// })
router.get('/retrieved_poem', (req, res) => {
    res.render('retrieved_poem')
})
//====================================================================== GET method

//====================================================================== GET method



router.post('/poems', (req, res) => {
    const title = req.body.title;
    const author = req.body.author;
    const body = req.body.body;
  
    const data = {
        "title": title,
        "author":author,
        "body": body
    }
db.collection('poems_texts').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");
        return res.redirect('memberPage');     
    });
})

module.exports = router