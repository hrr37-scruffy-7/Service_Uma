const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index');
const mongoose = require('mongoose');
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

//Get request for html page to render
app.get('/:id', (req, res)=> {
  console.log(req.params.id);
  res.sendFile('/Users/umaabrami/desktop/hrr37/hrr37-FEC/Service_Uma/public/index.html');
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