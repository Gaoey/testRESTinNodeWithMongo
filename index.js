const express = require('express')
const routes = require('./route/api')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// set up express app
const app = express()

mongoose.connect('mongodb://localhost/ninjago')
// mongoose Promise version are deprecate then equal to global Promise
mongoose.Promise = global.Promise

// แปลง request ให้ express อ่านได้ จึงต้อง parse มัน
app.use(bodyParser.json())
//initialize route
app.use('/api', routes)

//error handling middleware
app.use(function (err, req, res, next) {
  //console.log(err)
  res.status(422).send({
    error: err.message
  })
})

// listen for request
app.listen(process.env.port || 4000, function () {
  console.log('now listening for requests')
})