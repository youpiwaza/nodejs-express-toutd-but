var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('huehue', { title: 'huehue' });
  res.sendFile('/c/Users/Patolash/Documents/_dev/nodejs-express-toutd-but/myapp-generated/public/monSuperFichier.html');
});

module.exports = router;
