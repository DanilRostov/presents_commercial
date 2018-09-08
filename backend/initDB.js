"use strict"
const mongoose = require('mongoose');
const initData = require('./gifts.json');
const db = require('./config/keys').mongoURI;

const TOYS_COLLECTION_NAME = 'TOYS';
const BAGS_COLLECTION_NAME = 'BAGS';
const giftsListSchema = new mongoose.Schema({ 
  id: Number,
  name: String, 
  desciption: String,
  composition: [{
    title: String,
    amount: Number
  }] 
});

const ToysList = mongoose.model(TOYS_COLLECTION_NAME, giftsListSchema);
const BagsList = mongoose.model(BAGS_COLLECTION_NAME, giftsListSchema);

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB connected...');
    return mongoose.connection.dropDatabase();
  })
  .then(() => {
    console.log('MongoDB cleared...');
    BagsList.insertMany(initData.bags);
    return ToysList.insertMany(initData.toys);
  })
  .then(() => {
    console.log('Init data loaded into MongoDB successfully!');
    mongoose.connection.close();
  })
  .catch(err => console.log(err));

  