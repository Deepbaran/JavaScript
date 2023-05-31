require('dotenv').config() //To get the environmental variables
const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

//To check if there was any problem connecting to our db
db.on('error', (error) => console.log(error))
//At the start Open the mongoDB connection once
db.once('open', () => console.log('Connected to Database'))

//Middleware to accept JSON
app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter) //localhost:3000/subscribers

app.listen(3000, () => console.log('Server Started'))