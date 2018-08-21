//these will be standard to have in models
let mongoose = require('mongoose')
let Schema = mongoose.Schema

// things are going to be a little more enforced than the front end
let schema = new Schema({
    //telling it to be casted as a string rather than object, you also HAVE to give a name 
    //its good to enforce the type, required, default, etc
    name: { type: String, required: true },
    description: { type: String, default: 'No description, Choose your own fate!' },
    price: { type: Number, required: true }
})

//gotta export the model and schema 
module.exports = mongoose.model('Pizza', schema)