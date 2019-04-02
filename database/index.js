const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/frbo', { useNewUrlParser: true });

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