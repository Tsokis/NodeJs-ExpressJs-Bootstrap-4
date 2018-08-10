var express = require('express');
var router = express.Router();




// main page route
router.get('/', function (req, res) {
    
    res.render('index', {
        pageTitle: 'HOME',
        pageID: 'home'
    });
        
});


// exporting the module
module.exports = router;