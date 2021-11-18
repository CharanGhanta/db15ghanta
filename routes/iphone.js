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

/* GET detail iphone page */
router.get('/detail', iphone_controlers.iphone_view_one_Page);

/* GET create iphone page */
router.get('/create', iphone_controlers.iphone_create_Page);

/* GET create update page */ 
router.get('/update', iphone_controlers.iphone_update_Page); 

/* GET create costume page */ 
router.get('/delete', iphone_controlers.iphone_delete_Page); 
 
 

module.exports = router;
