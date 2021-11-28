let express = require('express')// express simular to python import
let router = express.Router()// makes a object that understands to match requests to paths to respond to requests. 
// (/)-the mapping, get starts.req is request, res is responds and next not used here.  
router.get('/', function(req, res, next) { 
    res.json({'message': 'That was fun, what is next!'})
})
module.exports = router
// module.exports pacakges for another file with be able to request and access the router file path. = router