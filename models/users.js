/*jslint node: true, indent: 2,nomen:true */
var mongoose = require('mongoose'),
  ObjectId = mongoose.Schema.ObjectId;

var venueSchema = mongoose.Schema({
    fname: String,
    lname: String,
    password: String,
    profilePic: String,
    rentedVenues: [{venueId: ObjectId, name: String, rentedDate: Date}],
    ratingAverage: Number,
    rating: [{grade: Number, comment: String, userId: ObjectId}]
  });


module.exports = mongoose.model('Venues', venueSchema);
