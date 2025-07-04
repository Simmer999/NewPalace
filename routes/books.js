const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error'))
db.once('open', (callback) => {
    console.log('Connected to MongoDB #Books from routes/book.js.')//           <----------------------
})

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const Book = require('../models/books');
const Books = db.collection('Books')    //These are the names of the collections in the database.






//==================================================================== GETs 
router.get('/books', (req, res) => {
    res.render('newPages/newBook')
})

router.get('/newBook', (req, res) => {
    Books.find().toArray()
    .then(results =>{
        res.render('newPages/newBook', { entries : results})
    })
    .catch(error => console.error(error))
})
//==================================================================== GETs

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
router.get('/retrieved_books', (req, res) => { 
//This is the entire books collection including contents.
    db.collection('Books')// See const users = db.collection('users')
    .find()
    .toArray()
    .then(results => {
        //In order to print the contents of the database to the console:
        // console.log(results)
        res.render('retrieved/retrieved_books', { Books: results })// Books vs entries
    })
    .catch(error => console.error(error))
})

router.get('/bookPresentation', (req, res) => { 
//This is the alternate book collction format from June19 'crud'.
    db.collection('Books')
    .find()
    .toArray()
    .then(results => {
        //In order to print the contents of the database to the console:
        // console.log(results)
        res.render('retrieved/bookPresentation', { Books: results })  
    })
    .catch(error => console.error(error))
})

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Book.findOneAndUpdate({title: 'New Title'}, {title: 'Democracy: A Very Short Introduction'}, {new: true}, (error, data) => {
// Book.findOneAndUpdate({title: 'New Title'}, {title: 'Democracy: A Very Short Introduction'}, {new: true}, (error, data) => {

// Book.findOneAndUpdate({title: 'Democracy: A Very Short Introduction'}, {body: '1. The word and the deed \n 2. The Place from where we started \n 3. Republicanism and democracy \n 4. Democracy and population'}, {new: true}, (error, data) => {
//     if(error) {
//         console.log('What?')
//     } else {
//         console.log(data)
//     }
// })

//==================================================== PUT for update book
// router.get('/members/updatePages/book_update', (req, res) => {
//     Books.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((book) => {
//         if (!book) {
//             return res.status(404).send();
//         }
//         res.render('members/updatePages/book_update');
//     }).catch(error => {
//         res.status(500).send(error);
//     })
// })

// router.get('/members/updatePages/book_update', (req, res) => {
//         res.render('members/updatePages/book_update');
// })


//==================================================== PUT for update book





//==================================================== Code for bookDetails
router.get('/Bookss/:id', (req, res) => { //Same as 
    const id = req.params.id 
    console.log(id)
    // db.collection('Books').find( { } ).toArray()
    Book.findById(id)
    .then(result => {  
    res.render('members/details/bookDetails', { Book: result }) 
    // console.log(result)
    })
    .catch(err => {
    console.log(err)   
})
})
//==================================================== Code for bookDetails


//==================================================== Code for book_update
router.get('/Books/:id', (req, res) => { //Same as 
    const id = req.params.id;
    Book.findById(id)
    .then(result => {
        res.render('updatePages/updateBook', { Books: result});
        // console.log(result)
        console.log('Aaaaah!');
    })
    .catch(err => {
        console.log(err)
    })
})
//==================================================== Code for book_update


//==================================================== Code for BookList
router.get('/BookList', (req, res) => { 
    Books.find().toArray()
        .then(results => {
            res.render('getPages/BookList', { entries : results})
        })
        .catch(error => console.error(error))
    })
//==================================================== Code for BookList
//==================================================== Code for bookPresentaion
router.get('/bookPresentation', (req, res) => {
    db.collection('Books')
    .find()
    .toArray()
    .then(results => {
        //In order to print the contents of the database to the console:
        // console.log(results)
        res.render('members/getPages/bookPresentation', { Books: results })  
    })
    .catch(error => console.error(error))
})
//==================================================== Code for bookPresentaion

// router.get('/book_update', (req, res) => {
//     res.render("members/updatePages/book_update")
//     console.log(req.body)
// })

//==================================================== POST for newBook<----Good
router.post('/newbook', (req, res) => {
    const book = new Book(req.body)
    book.save()
    .then((result) => {
        res.render('index')
    })
    //This function has been updated and it works. June20.
    .catch(err => {
        console.log(err)   
    })
})
//==================================================== POST for newBook<----Good
//==================================================== POST for newBook
router.post('/book_update', (req, res) => {
    const book = new Book(req.body)
    book.save()
    .then((result) => {
        res.render('index')
    })
    .catch(err => {
        console.log(err)   
    })
})
//==================================================== POST for newBook


router.delete('/Books/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id).then(book => {
        if (!book) {
            return res.status(404).send();
        }
        res.send(book);
    }).catch(error => {
        res.status(500).send(error);
    })
})

router.get('/updatePages/updateBook', (req, res) => {
    // Books.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((book) => {
    //     if (!book) {
    //         return res.status(404).send();
    //     }
        res.render('updatePages/updateBook');
    // }).catch(error => {
    //     res.status(500).send(error);
//     })
})

router.get('/members/updatePages/book_update', (req, res) => {
        res.render('members/updatePages/book_update');
})





router.get('/updateBook', (req, res) => {
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }
    const id = req.params.id;
    console.log(id)
    Book.findByIdAndUpdate(id, req.body, { useFindAndModify: true})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
    .then((result) => {
        res.render('index')
    })
    
    .catch(err => {
        console.log(err)   
    })
})



module.exports = router;














//==================================================== POST for newBook
// router.post('/newbook', (req, res ) => {
//     const title = req.body.title;
//     const author = req.body.author;
//     const body = req.body.body;
  
//     const data = {
//         "title": title,
//         "author": author,
//         "body": body
//     }
//     db.collection('Books').insertOne(data,function(err, collection){
//         if (err) throw err;
//         console.log("Record inserted Successfully");
//         return res.render('corePages/directory');    
//         // return res.redirect('corePages/directory') 
//     });
// })
//==================================================== POST for newBook

