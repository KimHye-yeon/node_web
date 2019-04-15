var createError = require('http-errors');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const us = [{
      name : '테스트1',
      age : 14
    },
    {
      name : '테스트2',
      age : 24
    }
  ]
  res.send({users : us});
})

router.post('/', function(req, res, next) {
  console.log(req.query)
  console.log(req.body)
  res.send({success: true, msg: 'post ok'})
})

router.put('/', function(req, res, next) {
  console.log(req.query)
  console.log(req.body)
  res.send({success: true, msg: 'put ok'})
})

router.delete('/', function(req, res, next) {
  console.log(req.query)
  console.log(req.body)
  res.send({success: true, msg: 'del ok'})
})

module.exports = router;
