let mongoose = require('mongoose')
const connectionString = 'mongodb://studentOne:student1@ds018568.mlab.com:18568/pizzashackshack'
//notice how studentOne:student1 is the user name and password you pulled from mLab 
let connection = mongoose.connection

//dont stress too much on this page, not particularly worth your TEE 
mongoose.connect(connectionString, {
    useNewUrlParser: true
})

//this will help tell you if something breaks and will show you the error
connection.on('error', err => {
    console.log("DATABASE ERROR: ", err)
})

//.once is an event listener for 'open' but only ONE time
//this is the one thing that usually changes per database, except up on that connectionString
connection.once('open', () => {
    console.log('Connected to Database')
})
