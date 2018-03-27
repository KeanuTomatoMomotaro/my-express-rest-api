const expect = require('chai').expect
var request = require('request')

it('Hello world', function(done){
    request('http://localhost:3000', function(error, response, body){
        expect(body).to.equal('Hello There!')
        done()
    })
})

it('Hello world status', function(done){
    request('http://localhost:3000', function(error, response, body){
        expect(response.statusCode).to.equal(200)
        done()
    })
})

it('Other page status', function(done){
    request('http://localhost:3000/about', function(error, response, body){
        expect(response.statusCode).to.equal(404)
        done()
    })
})