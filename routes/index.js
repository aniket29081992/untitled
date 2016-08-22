var express = require('express');
var apicheck=require('./api')
var router = express.Router();
var mongo = require('mongodb');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get ('/api/user/statusmsg', apicheck.getFormStatus);

module.exports = router;
