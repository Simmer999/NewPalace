require('dotenv').config()
const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const flash = require('connect-flash')
const session = require('express-session')
const bodyParser = require('body-parser')
const passport = require('passport')
const THREE = require('three')

// const mongoose = require('mongoose')
// mongoose.connect(process.env.DB, {
//     useNewUrlParser: true, 
//     useUnifiedTopology : true
// })
// const db = mongoose.connection
// db.on('error', console.log.bind(console, 'connection error'))
// db.once('open', (callback) => {
//     console.log('Connected to MongoDB #1.')
// })


app.set('view engine', 'ejs')
app.set('views', (path.join(__dirname, 'views')))

app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
}))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session())
//methodOverride
app.use(express.static(__dirname + '/'));
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    next()
})

// require('./api/config/passport')(passport)

// const booksRoutes = require('./api/routes/books');
// const essayRoutes = require('./api/routes/essayCols');
// const poemsRoutes = require('./api/routes/poems');
// app.use('/', booksRoutes);
// app.use('/', essayRoutes);
// app.use('/', poemsRoutes);

// app.use('/', require('./api/routes/index'))
// app.use('/users', require('./api/routes/users'))

app.get("/", (req, res) =>{
    res.render("index")
})

const port = process.env.PORT || 5555
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})