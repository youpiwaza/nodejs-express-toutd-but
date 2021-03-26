var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(
    // Appelle /views/index.pug
    'index',
    // Et dedans, remplace les variables par leurs valeurs
    {
      title: 'Express',
      uneCleAlakon: 'Ma super valeur'
    });
});

module.exports = router;
