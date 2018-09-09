"use strict"
const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const app = express();
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const toys = require('./routes/toys');
const bags = require('./routes/bags');

const corsDomains = {
  origin: ['http://localhost:3000', 'http://192.168.0.6:3000', 'http://localhost:8080']
};

app.use(cors(corsDomains));

app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.status(200).send('server is working');
});

app.use('/', toys);
app.use('/', bags);

app.get('/images/:page/:id', function (req, res) {
  const imageId = req.params.id;
  const page = req.params.page;
  const pathToImg = path.join(__dirname, './images', `${page}`, `${imageId}.jpg`);
  fs.open(pathToImg, 'r', function (err) {
    if (err) {
      res.status(503).send('no such file');
    } else {
      res.sendFile(pathToImg);
    }
  });
});

app.listen(port, () => console.log(`Server started on port ${port}`));