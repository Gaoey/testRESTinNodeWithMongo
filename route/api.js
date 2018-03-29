const express = require('express')
const router = express.Router();
const Ninja = require('../model/ninja')

//get a list of db
router.get('/ninja', function (req, res) {
  res.send({
    type: 'GET'
  })
})

//add new a list to the db
router.post('/ninja', function (req, res) {
  // receive object from Ninja Schema
  // var ninja = new Ninja(req.body)
  // save to database
  // ninja.save()

  Ninja.create(req.body).then((ninja) => {
    res.send(ninja)
    // res.send({
    //   type: 'POST',
    //   name: ninja.name,
    //   skill: req.body.skill
    // })
  })
})

//update a list in the db
router.put('/ninja/:id', function (req, res) {
  res.send({
    type: 'PUT'
  })
})

router.delete('/ninja/:id', function (req, res) {
  res.send({
    type: 'DELETE'
  })
})

module.exports = router