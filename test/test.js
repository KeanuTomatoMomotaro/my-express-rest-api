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

it('Signin and get jsonwebtoken', function(done){
    request.post('http://localhost:3000/signin', {form:{username:"makoko", password:"Makoto123"}}, function(error, response,body){
        expect(response.statusCode).to.equal(201)
        done()        
    })
})

it('Failed signin', function(done){
    request.post('http://localhost:3000/signin', {form:{username:"kutilang", password:"Kutilang2345"}}, function(error, response,body){
        expect(response.statusCode).to.equal(404)
        done()        
    })
})