const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index');
const mongoose = require('mongoose');

const app = express();

// mongoose.connect('localhost:5002');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '../public'));

//testing connection
// app.get('/', function(req, res) {
//   res.send('Hello World');
// });

//regular get request with 23958457
//imageId: 23958457
app.get('/image/23958457', (req, res)=> {
  db.find({imageId: 23958457}, (err, images) =>{
    if (!err){
      res.send(images);
    } else {
      console.log('error with get');
    }
  });
});


const PORT = 5002;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});