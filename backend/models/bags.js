"use strict"
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bagsSchema = new Schema({
  id: Number,
  name: String,
  desciption: String,
  composition: [{
    title: String,
    amount: Number
  }]
});

const Bags = mongoose.model('bags', bagsSchema);

module.exports = Bags;