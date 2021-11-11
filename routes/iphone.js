var express = require('express');
const iphone_controlers= require('../controllers/iphone');
var router = express.Router();

/* GET iphone */ 
router.get('/', iphone_controlers.iphone_view_all_Page );
module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('iphone', { title: 'Search Results iphone' });
});

module.exports = router;
