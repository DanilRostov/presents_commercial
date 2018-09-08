"use strict"
const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const app = express();
const cors = require('cors');

const toys = require('./routes/toys');
const bags = require('./routes/bags');

const corsDomains = {
  origin: ['http://localhost:3000', 'http://localhost:8080']
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

app.listen(port, () => console.log(`Server started on port ${port}`));