const express = require('express')

const app = express()

// set EJS
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log('Here')
    // res.sendStatus(200) //send status code
    
    // res.status(200) //Only set the status
    // res.send('Hi') //By default, status is 200

    // res.status(200).send('Hi')
    
    // res.status(200).json({'Greetings' : 'Hi'})
    
    // send a file for user to download
    // res.download('server.js')

    //render a file [By default all the view files are taken from views directory]
    res.render('index', { text: 'World' })
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

app.listen(3000)