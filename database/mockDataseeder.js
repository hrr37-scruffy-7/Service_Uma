const mongoose = require('mongoose');
var Image = require('../database');
const faker = require('faker');
const password = require('./DBconfig');

// var uri = 'mongodb+srv://uabrami:02bu08sf00syr%21@fec-ymx0r.mongodb.net/test?retryWrites=true';

var uri = `mongodb+srv://uabrami:${password.passwordMongodb}@fec-ymx0r.mongodb.net/frbo?retryWrites=true`;

mongoose.connect(uri, { useNewUrlParser: true });

var images = [];
var imageId = 1;

for (let i = 0; i < 100; i++) {
  imageId++;
  var limit = Math.floor(Math.random() * 20);
  for (let j = 0; j < limit; j++) {
    images.push (
      new Image({
        imagePath: faker.random.image(),
        imageId: imageId,
        imageIndex: j
      })
    );
  }
}

var done = 0;
for (var i = 0; i < images.length; i++){
  images[i].save(function(err, result){
    done++;
    if (done === images.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}