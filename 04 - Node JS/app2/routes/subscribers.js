const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscribers')

//Getting all
router.get('/', (req, res) => {
    res.send('Hello World')
})

//Getting one
router.get('/:id', (req, res) => {
    id = req.params.id
    res.send(id)
})

//Creating one
router.post('/', (req, res) => {
    
})

//Updating one
router.patch('/:id', (req, res) => {
    id = req.params.id
})

//Deleting one
router.delete('/:id', (req, res) => {
    id = req.params.id
})

module.exports = router