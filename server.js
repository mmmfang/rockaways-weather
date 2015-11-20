var express     = require('express'),
    server      = express(),
    morgan      = require('morgan'),
    bodyParser  = require('body-parser'),
    MongoClient = require('mongodb').MongoClient,
    // mongoose    = require('mongoose'),
    // Schema 		  = mongoose.Schema;	
    MONGOURI = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/marine_weather';

// var postSchema  = new Schema({
//   	post_value: { type: String, required: true },
//     created: { type: Date, default: Date.now }
// });

// var Post = mongoose.model('Post', postSchema);

server.use(express.static('./public'));

// server.set('views', './views');
// server.set('view engine', 'ejs'); 

server.get('/test', function(req,res) {
	res.write("Welcome to my fantastico app");
	res.end();
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


MongoClient.connect('mongodb://localhost:27017/marine_weather');
server.listen(3001, function(){
  console.log("Server is up at 3001");
});