var express = require('express');
var router = express.Router();

const iphone_controlers = require('../controllers/iphone')

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('iphone', { title: 'Search Results iphone' });
// });
router.get('/', iphone_controlers.iphone_view_all_Page);

/* GET detail iphone page */
router.get('/detail', iphone_controlers.iphone_view_one_Page);

/* GET create iphone page */
router.get('/create', secured,iphone_controlers.iphone_create_Page);

/* GET create update page */
router.get('/update', secured,iphone_controlers.iphone_update_Page);

/* GET create iphone page */
router.get('/delete', secured,iphone_controlers.iphone_delete_Page);

module.exports = router;