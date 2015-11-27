var express     = require('express'),
    server      = express(),
    PORT        = process.env.PORT || 3000,
    morgan      = require('morgan'),
    bodyParser  = require('body-parser'),
    MongoClient = require('mongodb').MongoClient,
    dbname      = "marine_weather",
    MONGOURI = process.env.MONGOLAB_URI || 'mongodb://localhost:27017';
    // mongoose    = require('mongoose'),
    // Schema 		  = mongoose.Schema;
    var request = require('request');
    var dotenv = require('dotenv').load();	

// var weatherSchema  = new Schema({
//   	post_value: { type: String, required: true },
//     created: { type: Date, default: Date.now }
// });
// var Weather = mongoose.model('Weather', weatherSchema);

server.use(express.static('./public'));

// server.set('views', './views');
// server.set('view engine', 'ejs'); 

server.get('/test', function(req,res) {
	res.write("Welcome to my fantastico app");
	res.end();
});


server.use('/weather', function(req, res) {  
  req.pipe(request('https://api.worldweatheronline.com/free/v2/marine.ashx?key=' + process.env.WORLD_WEATHER_KEY + '&format=json&q=40.64,-73.76')).pipe(res);
});

// server.get('/items', function(request, response){
//   Item.find({}, function(err, items){
//     response.json(items);
//   })
// });


// server.post('/items', function(request, response){
//   Item.create(request.body, function(err, data){
//     Item.find({}, function(err, items){
//       response.json(items);
//     });
//   });
// });


MongoClient.connect(MONGOURI + "/" + dbname);
        
server.listen(PORT, function() {
    console.log("SERVER IS UP ON PORT", PORT);
});