var express = require('express');
var router = express.Router();

/* GET parks page. */
router.get('/', function(req, res, next) {
  res.render('parks', { title: 'Search Results Parks' });
});

module.exports = router;
