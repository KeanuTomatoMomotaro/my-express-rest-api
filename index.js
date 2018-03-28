const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({
    extended: false
    })
)

app.use(bodyParser.json()); // support json encoded bodies

const jwt = require('jsonwebtoken');
const moment = require('moment');


app.get('/', function (req,res){
    res.send("Hello There!")
})

app.post('/signin', function(req, res){
    console.log(req.body.username)
    console.log(req.body.password)
    // console.log(req.body.password)
    if(req.body.username == "makoko" && req.body.password == "Makoto123"){
        //sign with default HMAC SHA256
        let token = jwt.sign({secretKey: 'harambe'}, 'itsSsecret');
        //backdate a jwt to 30 seconds
        let old_token = jwt.sign({secretKey: 'harambe', iat: Math.floor(Date.now() / 1000) - 30 }, 'itsSsecret');
        res.status(201).json({
            jwt_token: token,
            oldToken: old_token
        })
    }else{
        res.status(404).json('Wrong username or password')
    }
    
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))