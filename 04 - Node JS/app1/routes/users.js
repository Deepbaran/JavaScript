const express = require('express')

const router = express.Router()

// Running the logger middleware logger before all the routes
router.use(logger)

router.get('/', (req, res) => {
    //Accessing query parameters
    console.log(req.query.name)
    
    res.send('User List')
})

router.get('/new', (req, res) => {
    // res.send('User New Form')
    res.render("users/new", {firstName: "Test"})
})

router.post('/', (req, res) => {
    // res.send('Create User')

    const isValid = true
    if(isValid) {
        users.push({name: req.body.firstName})
        res.redirect(`/users/${users.length-1}`) //redirect ot the given url and render the get function associated to the route
    } else {
        console.log("Error!")
        res.redirect("/users/new")
    }

    // By default, we cannot read the body of the request.
    // We need a middleware to do that
    console.log(req.body.firstName)

    // res.send("Hi")
})

// Make sure Dynamic routes are defined at the end as Express tries to match methods from top to bottom
// router.get('/:id', (req, res) => {
//     console.log(`Get User With ID ${req.params.id}`)
// })

// router.put('/:id', (req, res) => {
//     console.log(`Get User With ID ${req.params.id}`)
// })

// router.delete('/:id', (req, res) => {
//     console.log(`Get User With ID ${req.params.id}`)
// })

// Chaining similar routes
router.route('/:id')
.get((req, res) => {
    console.log(req.user) //user attribute is setup in the middleware before request came here
    res.send(`Get User With ID ${req.params.id}`)
})
.put((req, res) => {
    res.send(`Get User With ID ${req.params.id}`)
})
router.delete((req, res) => {
    res.send(`Get User With ID ${req.params.id}`)
})

//This function will run, everytime it finds a param that matches the name we pass in
/*
router.param("id", (req, res, next, id) => {
    //This function will run everytime it filns a param that matches "id"
    console.log(id)

    //This function start running as soon as we call a url with parameter "id"
    //But it will not run any other funcion unless we call next
    //So, till we call next, our website will be infinitely loading
    //What next does is that, it says if it is called, run the next thing in line
    //This is because, .param is a middleware in Express
    //middleware is a thing that runs between the request being sent to the server and the actual response being returned to the user
    //So, .param being a middleware will run first before any get, put, post, delete, patch, etc functions, as soon a request comes in.
    next()
})
*/

const users = [{ name: "Kyle "}, { name: "Sally" }]
router.param("id", (req, res, next, id) => {
    //As .param is a middleware, we are setting the user attribute to the request before it goes to method functions
    req.user = users[id]
    next()
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router