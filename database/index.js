
const mongoose = require('mongoose');
// const password = require('./DBconfig');
// var uri = `mongodb+srv://uabrami:${password.passwordMongodb}@fec-ymx0r.mongodb.net/frbo?retryWrites=true`;
const uri = 'mongodb://localhost:27017';

mongoose.connect(uri, { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('it worked, mongoose working!');
});

var schema = mongoose.Schema({
  imagePath: {type: String, required: true},
  imageId: {type: Number, required: true},
  imageIndex: {type: Number, required: true}
});

module.exports = mongoose.model('Image', schema);