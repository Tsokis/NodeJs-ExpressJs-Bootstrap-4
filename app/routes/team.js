var express = require('express');
var router = express.Router();



// team page route
router.get('/team', function (req, res) {
    /** 
    
    var info = '';
    // accessing from the app.js the dat.json file   [dataFile = require('./data/data.json'); in app.js]
    var dataFile = req.app.get('appData');
    // looping the json file and response with an html page parsing out our given data
    dataFile.team.forEach(function (item) {
       info += `
            <ul>
             <h2>${item.name}</h2>
             <img src="/images/team/${item.shortname}.jpg" alt="teamMembers">
             <li><p>${item.summary}</p></li>
            </ul>            
         `;
    });
    // response from the server
    res.send(`<link href="css/mainstyle.css" type="text/css">
              <h1>First node+express project</h1>
              <h1>Welcome to our Team Section</h1>
              ${info}       
        `);
        **/

    var data = req.app.get('appData');
    var teamServicesPhotos = [];
    var teamMembers = data.team;

    data.team.forEach(function (item) {
        teamServicesPhotos = teamServicesPhotos.concat(item.services);
    });

    res.render('team', {
        pageTitle: 'Team',
        team: teamMembers,
        services: teamServicesPhotos,
        pageID: 'teamList'
    });

});


// team detail page route
router.get('/team/:teamid', function (req, res) {
    /** 
     var dataFile = req.app.get('appData');
    // setting variable for accessing the data on data.json
     var teamMem = dataFile.team[req.params.teamid];
   
    // response from the server
    res.send(`
              <link type="text/css" href="css/mainstyle.css">
              <h1>${teamMem.title}</h1>
              <h2>${teamMem.name}</h2>
              <img src="/images/team/${teamMem.shortname}.jpg" alt="teamMembers">
              <p>${teamMem.summary}</p>
  
        `);
    **/
    var data = req.app.get('appData');
    var teamServicesPhotos = [];
    var teamMembers = [];

    data.team.forEach(function (item) {
        if (item.shortname == req.params.teamid)
            teamMembers.push(item);
        teamMembers = teamMembers.concat(item.services);
    });

    res.render('team', {
        pageTitle: 'Team',
        team: teamMembers,
        services: teamServicesPhotos,
        pageID: 'teamDetail'
    });

});

/**
// team detail page route
router.get('/team/:teamid', function (req, res) {
     var dataFile = req.app.get('appData');
    // setting variable for accessing the data on data.json
     var teamMem = dataFile.team[req.params.teamid];
     
   
    // response from the server
    res.send(`
              
              <h1>${teamMem.title}</h1>
              <h2>${teamMem.name}</h2>
              <img src="/images/team/${teamMem.shortname}.jpg" alt="teamMembers">
              <p>${teamMem.summary}</p>
  
        `);
    
    
     });
     **/


// exporting the module
module.exports = router;