let express = require('express')
let server = express()
let bodyParser = require('body-parser')
let port = 3000
let cors = require('cors')

server.use(cors())

//connect to db
require('./server-assets/db/mlab-config')

//register Middleware
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
    extended: true
}))

//routes
let pizzaRoutes = require('./server-assets/routes/pizza-routes')

// the '/pizza' puts all pizzaRoutes behind /pizza 
server.use('/api/pizza', pizzaRoutes)


//starts server 
server.listen(port, () => {
    console.log('Running on port: ', port)
})