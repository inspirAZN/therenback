
/**
 * Module dependencies.
 */
  
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var mongoose = require('mongoose');


var login = require('./routes/login');
var moments = require('./routes/moments');
// Example route
// var user = require('./routes/user');

// var local_database_name = 'therenbackUsers';
// var local_database_uri  = 'mongodb://localhost/' + local_database_name
// var uristring = process.env.MONGOLAB_URI ||
// 		process.env.MONGOLAB_URL ||
// 		'mongodb://localhost/HelloMongoose';

// connect to the database
mongoose.connect("mongodb://heroku_app22799284:7jdr872c4cfck3289233bfb1o7@ds033449.mongolab.com:33449/heroku_app22799284")


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

// mongoose.connect(uristring, function(err, res){
//   if (err) {
//     console.log('ERROR connect to: ' + uristring + '. ' + err  );
//   } else {
//     console.log('Succeeded connected to: ' + uristring);
//   }
// });

// Static Routes
app.get('/', function(req, res) {
	res.sendfile('index.html');
});
app.get('/login', function(req, res) {
	res.sendfile('login.html');
});
app.get('/signup', function(req, res) {
	res.sendfile('signup.html');
});

// dynamic routes






http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
