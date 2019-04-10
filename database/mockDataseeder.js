const mongoose = require('mongoose');
var Image = require('../database');
const faker = require('faker');

mongoose.connect('mongodb://localhost/frbo', { useNewUrlParser: true });

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