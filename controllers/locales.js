var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	Locale = require('../models/locale.js');


router.get('/', function(req,res){
	Locale.find({}, function (err, locales) {
if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of all users
            res.json(locales);
        });


		// if (err) {
		// 	console.log("error retrieving locales from db")
		// } else {
		// 	res.json(locales);
		// }

	})

router.post('/', function(req,res) {
	var newLocale = new Locale(req.body);

	newLocale.save(function(err, locales){
		if (err) {
			console.log("error saving location to db")
		} else {
			res.json(req.body); //responding with the json of the new location 
		}
	})
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


module.exports = router;