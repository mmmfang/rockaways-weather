var express     = require('express'),
    server      = express(),
    PORT        = process.env.PORT || 3001,
    bodyParser  = require('body-parser');
//  MongoClient = require('mongodb').MongoClient,
//  MONGOURI = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/rockaways-weather';
    var request = require('request');
    var dotenv = require('dotenv').load();	
    // var nodemailer = require("nodemailer");


server.use(express.static('./public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));

server.get('/test', function(req,res) {
	res.write("Welcome to my fantastico app");
	res.end();
});

server.use('/weather', function(req, res) {  
  req.pipe(request('https://api.worldweatheronline.com/free/v2/marine.ashx?key=' + process.env.WORLD_WEATHER_KEY + '&format=json&q=40.64,-73.76')).pipe(res);
});

//MongoClient.connect(MONGOURI);

server.listen(PORT, function() {
    console.log("SERVER IS UP ON PORT", PORT);
});