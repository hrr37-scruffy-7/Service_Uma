// const mongoose = require('mongoose');
// var Image = require('../database');
// const faker = require('faker');

// mongoose.connect('mongodb://localhost/frbo', { useNewUrlParser: true });

// var images = [];
// var imageId = 23958457;

// for (let i = 0; i < 1; i++) {
//   imageId++;
//   for (let j = 0; j < 10; j++) {
//     images.push (
//       new Image({
//         imagePath: faker.random.image(),
//         imageId: imageId,
//         imageIndex: j + 1
//       })
//     );
//   }
// }

// var done = 0;
// for (var i = 0; i < images.length; i++){
//   images[i].save(function(err, result){
//     done++;
//     if (done === images.length) {
//       exit();
//     }
//   });
// }

// function exit() {
//   mongoose.disconnect();
// }