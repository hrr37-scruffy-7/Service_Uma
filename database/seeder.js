const mongoose = require('mongoose');
var Image = require('../database');
const password = require('./DBconfig');

var uri = `mongodb+srv://uabrami:${password.passwordMongodb}@fec-ymx0r.mongodb.net/frbo?retryWrites=true`;

mongoose.connect(uri, { useNewUrlParser: true });

var images = [
  new Image({
    imagePath: 'https://s3-us-west-1.amazonaws.com/frbo-images/23958457_index0.jpg',
    imageId: 1,
    imageIndex: 0
  }),
  new Image({
    imagePath: 'https://s3-us-west-1.amazonaws.com/frbo-images/23958457_index1.jpg',
    imageId: 1,
    imageIndex: 1
  }),
  new Image({
    imagePath: 'https://s3-us-west-1.amazonaws.com/frbo-images/23958457_index2.jpg',
    imageId: 1,
    imageIndex: 2
  }),
  new Image({
    imagePath: 'https://s3-us-west-1.amazonaws.com/frbo-images/23958457_index3.jpg',
    imageId: 1,
    imageIndex: 3
  }),
  new Image({
    imagePath: 'https://s3-us-west-1.amazonaws.com/frbo-images/23958457_index4.jpg',
    imageId: 1,
    imageIndex: 4
  }),
  new Image({
    imagePath: 'https://s3-us-west-1.amazonaws.com/frbo-images/23958457_index5.jpg',
    imageId: 1,
    imageIndex: 5
  }),
  new Image({
    imagePath: 'https://s3-us-west-1.amazonaws.com/frbo-images/23958457_index6.jpg',
    imageId: 1,
    imageIndex: 6
  }),
  new Image({
    imagePath: 'https://s3-us-west-1.amazonaws.com/frbo-images/23958457_index7.jpg',
    imageId: 1,
    imageIndex: 7
  }),
  new Image({
    imagePath: 'https://s3-us-west-1.amazonaws.com/frbo-images/23958457_index8.jpg',
    imageId: 1,
    imageIndex: 8
  }),
  new Image({
    imagePath: 'https://s3-us-west-1.amazonaws.com/frbo-images/23958457_index9.jpg',
    imageId: 1,
    imageIndex: 9
  }),
  new Image({
    imagePath: 'https://s3-us-west-1.amazonaws.com/frbo-images/23958457_index10.jpg',
    imageId: 1,
    imageIndex: 10
  }),
  new Image({
    imagePath: 'https://s3-us-west-1.amazonaws.com/frbo-images/23958457_index11.jpg',
    imageId: 1,
    imageIndex: 11
  }),
];

var done = 0;
for (var i = 0; i < images.length; i++) {
  images[i].save(function(err, result) {
    done++;
    if (done === images.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}