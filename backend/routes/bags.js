const express = require('express');
const router = express.Router();
const Bags = require('../models/bags');
const generateIds = require('../utils/generateIds');

router.get('/bags', (req, res) => {
  if (req.query.start && req.query.limit) {
    const ids = generateIds(req.query.start, req.query.limit);
    Bags.find({ id: { $in: ids } })
      .then(bags => res.status(200).send(bags))
  } else {
    res.status(400).send('use start and limit queries');
  }
});

module.exports = router;