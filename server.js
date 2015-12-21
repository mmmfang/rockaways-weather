var express     = require('express'),
    server      = express(),
    PORT        = process.env.PORT || 3000,
    morgan      = require('morgan'),
    bodyParser  = require('body-parser'),
    methodOverride =require('method-override'),
//    MongoClient = require('mongodb').MongoClient,
    dbname      = "marine_weather",
    MONGOURI = process.env.MONGOLAB_URI || 'mongodb://localhost:27017';
    mongoose    = require('mongoose');
    Schema 		  = mongoose.Schema;
    var request = require('request');
    var dotenv = require('dotenv').load();	
    // var nodemailer = require("nodemailer");


server.use(express.static('./public'));
server.use('/bower_components', express.static(__dirname + '/bower_components'));
server.use(morgan('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.text()); 
server.use(bodyParser.json({type: 'application/vnd.api+json'}));
server.use(methodOverride('_method'));


server.get('/test', function(req,res) {
	res.write("Welcome to my fantastico app");
	res.end();
});

server.use('/weather', function(req, res) {  
  req.pipe(request('https://api.worldweatheronline.com/free/v2/marine.ashx?key=' + process.env.WORLD_WEATHER_KEY + '&format=json&q=40.64,-73.76')).pipe(res);
});

//routes to controller
var localesController = require('./controllers/locales.js');
//server.use('/locales', localesController);


// MongoClient.connect(MONGOURI + "/" + dbname);

mongoose.set('debug', true);
mongoose.connect(MONGOURI + "/" +dbname);  

server.listen(PORT, function() {
    console.log("SERVER IS UP ON PORT", PORT);
});