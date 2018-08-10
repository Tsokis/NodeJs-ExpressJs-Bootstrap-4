
// feedback route page
var express = require('express');
var router = express.Router();




// feedback route settings
router.get('/feedback', function (req, res) {
    
    res.render('feedback', {
        pageTitle: 'Feedback',
        pageID: 'feedback'
    });
        
});


// exporting the module
module.exports = router;