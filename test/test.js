const expect = require('chai').expect
var request = require('request')

it('Hello world', function(done){
    request('http://localhost:3000', function(error, response, body){
        expect(body).to.equal('Hello There!')
        done()
    })
})