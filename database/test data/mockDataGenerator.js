var Image = require('../database');
var fs = require('fs');
const faker = require('faker');

var generateImagesData = (images = [], imageId = 23958557) => {

  for (let i = 0; i < 10; i++) {
    imageId++;
    for (let j = 0; j < 10; j++) {
      images.push (
        new Image({
          imagePath: faker.random.image(),
          imageId: imageId
        })
      );
    }
  }
  return images;
};

let data = JSON.stringify(generateImagesData(), null, 2);
fs.writeFileSync('mockDataTest.json', data);