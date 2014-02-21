
var Mongoose = require('mongoose');


var MomentSchema = new Mongoose.Schema({
  // fields are defined here
  "location": String,
  "imgsrc": Date,
  "numphotos": String,
  "heart": String

});

exports.Moments = Mongoose.model('Moments', MomentSchema);


