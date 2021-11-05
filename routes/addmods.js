var express = require('express');
var router = express.Router();
var client_count = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
    var query = req.query
console.log(`rows ${query.rows}`)
console.log(`cols ${query.cols}`)
    
    res.render('addmods', { title: `AddMods`, query: query });
});

module.exports = router;
