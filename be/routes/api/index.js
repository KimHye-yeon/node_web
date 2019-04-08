var createError = require('http-errors');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/best', function(req, res, next) {
  res.send( { msg : 'hello', a : 1 });
});

router.get('/best', function(req, res, next) {
  res.send( { msg : 'best', a : 2 });
});

router.use('/user', require('./user'));

/* GET home page. */
router.all('*', function(req, res, next) {
  next(createError(404, 'API를 찾을 수 없습니다.'));
});

module.exports = router;
