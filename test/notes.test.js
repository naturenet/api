var hippie = require('hippie')
var server = require('../lib/server')

describe('Server', function() {
    describe('/note endpoint', function() {
        it('returns a note based on the id', function(done) {
            hippie(server)
                .json()
                .get('/api/note/10')
                .expectStatus(200)
                .expectValue('data.id', 10)
                .expectValue('data.kind', 'FieldNote')
                .end(function(err, res, body) {
                    if (err) throw err
                    done()
                })
        })
    })

    describe('/context endpoint', function() {
        it('returns a context based on the id', function(done) {
            hippie(server)
                .json()
                .get('/api/context/2')
                .expectStatus(200)
                .expectValue('data.id', 2)
                .end(function(err, res, body) {
                    if (err) throw err
                    done()
                })
        })
    })
})