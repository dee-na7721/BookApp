var express = require('express');
var router = express.Router();
var books = require('../resources/books')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BookApp',bookList:books }, );
});


router.get('/deena', function(req, res, next) {
  res.render('index', { title: 'Deena' });
});

module.exports = router;
