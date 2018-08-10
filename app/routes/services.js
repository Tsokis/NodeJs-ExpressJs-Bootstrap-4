// services route page
var express = require('express');
var router = express.Router();




// services route settings
router.get('/services', function (req, res) {
    var data = req.app.get('appData');
    var servicesPhotos = [];
    var servicesPhotosJson = data.team;

    data.team.forEach(function (item) {
        servicesPhotos = servicesPhotos.concat(item.services);
    });


    res.render('services', {
        pageTitle: 'Services',
        pageID: 'services',
        servicesData: servicesPhotosJson,
        services: servicesPhotos
    });
        
});


// exporting the module
module.exports = router;