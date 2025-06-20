const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(process.env.MDB, {
    useUnifiedTopology: true })
        .then(client => {
            const db = client.db('sample_mflix');
             
            const movies = db.collection('movies');
            const users = db.collection('users')
console.log('Connected to movies database.')

                    
router.get('/retrieved_movies', (req, res) => {
    db.collection('movies')
    .find()
    .limit(15)
    .skip(22000)
    .toArray()
        .then(results => {
            res.render('retrieved/retrieved_movies', { movies: results })
            // console.log({results})
        })
    .catch(error => console.error(error))
});  

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());    





    




    
});

module.exports = router