const express = require('express')

const app = express()

// set EJS
app.set('view engine', 'ejs')

// Middleware to server static pages
// As this is defined at the top, this will overwrite all the other routes defined below
app.use(express.static("public"))
//http://localhost:3000/
//http://localhost:3000/test/tt.html

// We need this middleware to read the body of a request in any route in express
app.use(express.urlencoded({extended: true}))

// Middleware to parse JSON requests from the body
app.use(express.json())

// If we want a middleware to be applicable to all the route requests, use it at the top of the page
// The placement is top to bottom. If we want a middleware to be used before any route call, we need to use it before that request
// Or we can use the middleware on individual endpoints.
// app.use(logger) //Using the logger middleware

// There are three arguments, req, res and next
// But for requests we do not need the next
// app.get('/', (req, res) => {
//     console.log('Here')
//     // res.sendStatus(200) //send status code
    
//     // res.status(200) //Only set the status
//     // res.send('Hi') //By default, status is 200

//     // res.status(200).send('Hi')
    
//     // res.status(200).json({'Greetings' : 'Hi'})
    
//     // send a file for user to download
//     // res.download('server.js')

//     //render a file [By default all the view files are taken from views directory]
//     res.render('index', { text: 'World' })
// })

// Adding the middleware with the request
// But now, logger will not be implemented for any other functon
// We can put any amount of middlewares with this individual endpoint/route
//  app.get('/', logger, logger, logger, (req, res) => {})
// app.get('/', logger, (req, res) => {
//     console.log('Here')
//     res.render('index', { text: 'Deep' })
// })

const userRouter = require('./routes/users')

app.use('/users', userRouter) 

// logging middleware
// Every middleware takes three arguments, req, res and next
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)