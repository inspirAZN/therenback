
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var mongoose = require('mongoose');


var index = require('./routes/index');
var moments = require('./routes/moments');
//var project = require('./routes/project');
//var palette = require('./routes/palette');
// Example route
// var user = require('./routes/user');

var local_database_name = 'therenback';
var local_database_uri  = 'mongodb://localhost/' + local_database_name
var uristring = process.env.MONGOLAB_URI ||
		process.env.MONGOLAB_URL ||
		'mongodb://localhost/HelloMongoose';

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

mongoose.connect(uristring, function(err, res){
  if (err) {
    console.log('ERROR connect to: ' + uristring + '. ' + err  );
  } else {
    console.log('Succeeded connected to: ' + uristring);
  }
});

// Add routes here
app.get('/', index.view);
app.get('/moments/:_id', moments.view);
// app.get('/palette', palette.randomPalette);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
