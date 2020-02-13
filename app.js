const express = require('express')
const Datastore = require('nedb-promise')

const users = new Datastore({ filename: 'users.db', autoload: true })

const app = express()

app.use(express.json())



/*Hämtar alla users */
app.get('/users', (req, res) => {
    users.find({}, function(error, documents) {
        let responseJSON = { "results": documents }
        res.json(responseJSON)
    })

})

app.get('/users', (req, res) => {
    users.find({})
        .then(result => res.json({ "result": result }))
})

app.get('/users', async(req, res) => {
    const result = await users.find({})
    res.json({ "result": result })
})

/*Hämtar ett specifikt id */
/*app.get('/users/:id', (req, res) => {
    users.findOne({ _id: req.params.id }, function(error, documents) {
        res.json(documents)
    })

})*/

app.get('/users/:id', async(req, res) => {
    const result = await users.findOne({ _id: req.params.id })
    res.json({ "result": result })
})

/*app.get('/users/:id', (req, res) => {
    users.findOne({ _id: req.params.id })
        .then()
})*/

/*app.get('/users/:id', (req, res) => {
    users.findOne({ _id: req.params.id })
        .then()
})*/

/*Lägger till en användare */
app.post('/users', (req, res) => {

    let newUser = {
        name: {
            title: req.body.title,
            first: req.body.first,
            last: req.body.last
        },
        nat: req.body.nat,
        email: req.body.email

    }

    users.insert(newUser,
        function(error, newUser) {
            res.json(newUser)
        })

})

app.post('/users', (req, res) => {
    const newUser = {
        name: {

        }

    }
})


// app.post('/users', async (req,res) => {
//     const newUser = {    
//         name: {
//             title: req.body.title,
//             first: req.body.first,
//             last: req.body.last, 
//         },        
//         email: req.body.email, 
//         nat: req.body.nat
//     }

//     // await users.insert(newUser, function (err, newDoc) { 
//     //     res.json(newDoc)

//     //   });
//     const newUser = await users.insert(newUser)
//     res.json({ "newUser": newUser })
// })

app.delete('/users/:id', (req, res) => {

    users.remove({ _id: req.params.id }, function(error, documents) {

    })

})






console.log("Server started")
app.listen(8080)