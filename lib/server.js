var restify = require('restify');
var server = restify.createServer();

var oldapi = restify.createJsonClient({
    url: 'http://naturenet.herokuapp.com/'
})

server.get('/api/note/:id', function(req, res) {

    oldapi.get('/api/note/' + req.params.id, function(err, oldreq, oldres, obj) {    	
        res.json(obj)
    })

	// res.json({data : {id : 10}})

})

server.get('/api/context/:id', function(req, res) {

    oldapi.get('/api/context/' + req.params.id, function(err, oldreq, oldres, obj) {    	
        res.json(obj)
    })
    
})


module.exports = server