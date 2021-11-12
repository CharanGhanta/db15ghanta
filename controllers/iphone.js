var iphone = require('../models/iphone');

// List of all iphones

exports.iphone_list = async function (req, res) {
    try {
        theiphone = await iphone.find();
        res.send(theiphone);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.iphone_view_all_Page = async function (req, res) {
    try {
        theiphone = await iphone.find();
        res.render('iphone', { title: 'iphone Search Results', results: theiphone });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};

// for a specific iphone.
exports.iphone_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await iphone.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle iphone create on POST. 
exports.iphone_create_post = async function (req, res) {
    console.log(req.body)
    let document = new iphone();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"color":"silver", "cost":850, "model":"14"}
    document.color = req.body.color;
    document.cost = req.body.cost;
    document.model = req.body.model;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle iphone delete form on DELETE.
exports.iphone_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: iphone delete DELETE ' + req.params.id);
};

// Handle iphone update form on PUT. 
exports.iphone_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await iphone.findById(req.params.id)
        // Do updates of properties
        if (req.body.color) toUpdate.color = req.body.color;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        if (req.body.model) toUpdate.model = req.body.model;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};