
const mongoose = require('mongoose')
const express = require('express')

mongoose.Promise = global.Promise
const app = express()

let env = process.env.NODE_ENV || 'Dev'
let port = prrocess.port || 1337
app.get('/',function(req,res){
    console.log('Express ready!')

 mongoose.
    connect('mongodb://localhost:27017/some-express-db')
     .then(function(){
     console.log('MongoDB ready!')
        res.send('OK')
 })

})
app.listen(27017)