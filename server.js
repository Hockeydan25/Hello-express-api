let express = require('express')// use express and route file.
let routes = require('./routes/routes')
let path = require('path')

let app = express() // creates web app.

app.use(express.static(path.join(__dirname, 'hello-vue', 'dist')))
//statict files, user make differnet choices but same code for everyone. 

app.use('/api', routes) //telling app what o use api routes. 
// assigns to watch/listen what port our messages will be used local is 3000.
let server = app.listen(process.env.PORT || 3000, function () {
    //gives us message of the port number.
    console.log('Express server running on port', server.address().port)
})