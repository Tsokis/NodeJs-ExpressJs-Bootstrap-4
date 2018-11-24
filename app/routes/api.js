// api route page but we are not going to render it as the other route pages
// feedback.json is sample data for testing the form
var express = require('express');
var router = express.Router();
// npm install --save body-parser [middleware on terminal in our folder project]
var bodyParser = require('body-parser')
var fs = require('fs')
var feedbackData = require('../data/feedback.json');




// api get route settings
router.get('/api', function (req, res) {
    res.json(feedbackData);  
        
});

// body-parser in order to understand our requests propertly
router.use(bodyParser.urlencoded({ extended: false }));

// api post route settings
router.post('/api', function (req, res){
    // push the latest feedback on the top
    feedbackData.unshift(req.body); 
    // save, read propertly in our feedback.json and capture the error if exists
    fs.writeFile('../app/data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err) {
        if(err){
        console.log(err);
        }
    });
    // from our feedback json file
    res.json(feedbackData);    
});

// api delete route settings
router.delete('/api/:id', function (req, res){
    // delete the element
    feedbackData.splice(req.params.id, 1); 
    // save, read propertly in our feedback.json and capture the error if exists
    fs.writeFile('../app/data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err) {
        console.log(err);
    });
    // from our feedback json file
    res.json(feedbackData);    
});

// exporting the module
module.exports = router;