// making server with express
var express = require('express');
var app = express();
// connecting the data.json file i made to the app
var dataFile = require('./data/data.json');
// connectiong middleware socket.io
var io = require('socket.io')();


//setting up the port
app.set('port', process.env.PORT || 3000);

// data passing through routes
app.set('appData', dataFile);

// connecting EJS
app.set('view engine', 'ejs');
// setting location
app.set('views','views');

// setting up static title variable for html templates
app.locals.siteTitle = "TechServices";

// setting up in all team members
app.locals.allTeam = dataFile.team;

// routes
app.use(require('./routes/index'));
app.use(require('./routes/team'));
app.use(express.static('public'));
app.use(require('./routes/feedback'));
//adding some feedback to display NOTE:through this way we have to make a js dom script for parsing the data to the actual page insteas of showing as json /api
app.use(require('./routes/api'));
app.use(require('./routes/services'));
app.use(require('./routes/chat'));

//buckle up the server
var server = app.listen(app.get('port'), function () {
   console.log('Listening on port:' + app.get('port'));
 });

// attaching server with socket.io
io.attach(server);
// detect connection
io.on('connection', function(socket) {
      socket.on('postMessage', function(data) {
          io.emit('updateMessages', data);
  });
});







/**  making server with node Js

var http = require('http');

var myServer = http.createServer(function (request, response) {
    
    response.writeHead(200, {"Content-Type" : "text/html"});   
    response.write('<h1>Live response!</h1>');
    response.end();
    
});

myServer.listen(3000);
console.log('Your are ON mate!!Cheers!!');
**/






