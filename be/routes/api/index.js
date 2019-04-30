var express = require('express');
var createError = require('http-errors');
var router = express.Router();

//미들웨어1
router.all('*', function(req, res, next) {
  console.log(req.headers)

  if (req.path === '/xxx') return res.send({ status : 'OK'})
  next()
});


/* GET home page. */
router.get('/hello', function(req, res, next) {
  res.send({ msg: 'hello', a: 1 })
})

router.get('/users', function(req, res, next) {
  res.send({ msg: 'hello', a: 1 })
})
router.post('/users', function(req, res, next) {
  res.send({ msg: 'hello', a: 1 })
})

router.put('/:id', (req, res, next) => {
  const id = req.params.id
  const { name, age } = req.body
  User.updataOne({ _id: id}, {$set: {name, age}})
    .then(r => {
      res.send({success: true, msg: r })
    })
    .catch( e => {
      res.send({ success: false, msg: e.message })
    })
})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  User.deleteOne({ _id: id })
    .then(r => {
      res.send({ success: true, msg: r })
    })
    .catch(e => {
      res.send({ success: false, msg: e.message })
    })
  res.send({ success: true, msg: 'del ok' })
})

router.use('/test', require('./test'));
router.use('/user', require('./user'));

router.all('*', function(req, res, next) {
  next(createError(404, 'API를 찾을 수 없습니다.'));
});


module.exports = router;
