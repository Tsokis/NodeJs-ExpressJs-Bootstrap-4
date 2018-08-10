// chatroute page
var express = require('express');
var router = express.Router();




// chat route settings
router.get('/chat', function (req, res) {
    
    res.render('chat', {
        pageTitle: 'Chat',
        pageID: 'chat'
    });
        
});


// exporting the module
module.exports = router;