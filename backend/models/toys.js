"use strict"
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toysSchema = new Schema({
  id: Number,
  name: String,
  desciption: String,
  composition: [{
    title: String,
    amount: Number
  }] 
});

const Toys = mongoose.model('toys', toysSchema);

module.exports = Toys;