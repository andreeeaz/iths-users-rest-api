const Datastore = require('nedb')
const users = new Datastore({ filename: 'users.db', autoload: true })


function runThisWhenDone(error, result) {
    console.log("IM DONE!")
    console.log(result)
}

console.log("IM QUERYING THE DATABASE!")
users.find({ nat: "FR" }, runThisWhenDone)