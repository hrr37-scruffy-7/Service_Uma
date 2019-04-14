const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index');
const mongoose = require('mongoose');
const path = require('path');
var router = require('express').Router();
let cors = require('cors');

const app = express();

// mongoose.connect('localhost:5002');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));
//__dirname +
//testing connection
// app.get('/', function(req, res) {
//   res.send('Hello World');
// });

//Get request for html page to render at homepage

app.get('/', (req, res)=> {
  let getPath = path.join(__dirname, '..', 'public', 'index.html');
  res.sendFile(getPath);
});

//Get request for html page to render at endpoint

app.get('/:id', (req, res)=> {
  let getPath = path.join(__dirname, '..', 'public', 'index.html');
  console.log(getPath);
  res.sendFile(getPath);
});

//Get request to get database images based on id
app.get('/images/:id', (req, res)=> {
  console.log(req.params.id);
  db.find({imageId: req.params.id}, (err, images) =>{
    console.log('***** server index.js', images);
    if (!err) {
      res.send (images);
    } else {
      console.log('error with get');
    }
  });
});

const PORT = 5002;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

//make sure to sort the Mongo DB before rendering
//use FRBO;
//db.images.find().sort({imageId:1, imageIndex:1})