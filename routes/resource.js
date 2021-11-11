var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var iphone_controller = require('../controllers/iphone');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// iphone ROUTES ///
// POST request for creating a iphone. 
router.post('/iphones', iphone_controller.iphone_create_post);
// DELETE request to delete iphone.
router.delete('/iphones/:id', iphone_controller.iphone_delete);
// PUT request to update iphone.
router.put('/iphones/:id', 
iphone_controller.iphone_update_put);
// GET request for one iphone.
router.get('/iphones/:id', iphone_controller.iphone_detail);
// GET request for list of all iphone items.
router.get('/iphones', iphone_controller.iphone_list);
module.exports = router;