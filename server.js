var express     = require('express'),
    server      = express(),
    morgan      = require('morgan'),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose');


// var itemSchema  = new Schema({
//   todo_value: { type: String, required: true },
//   created: { type: Date, default: Date.now }
// });
// var Item = mongoose.model('Item', itemSchema);

server.use(express.static('/public'));

server.set('views', './views');
server.set('view engine', 'ejs'); 

server.get('/', function (req, res) {
  res.send('Hello World!');
});


//routes to Controllers
var usersController = require('./controllers/users.js');
server.use('/users', usersController);

var postsController = require('./controllers/weather.js');
server.use('/weather', weatherController);
//anytime i go to anything inside posts, use my post controller



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

// mongoose.connect('mongodb://localhost:27017/todos');
server.listen(3000, function(){
  console.log("Server is up at 3000");
});