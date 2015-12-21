var mongoose	= require('mongoose'),
    Schema 		= mongoose.Schema;

var localeSchema  = new Schema({
      	location: { type: String, required: true },
        latitude: { type: Number, required:true},
        longitude: {type: Number, required:true},
        created: { type: Date, default: Date.now}
 });

var Locale = mongoose.model('Locale', localeSchema);

module.exports = Locale;
