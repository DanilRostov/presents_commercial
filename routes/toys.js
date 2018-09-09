const express = require('express');
const router = express.Router();
const Toys = require('../models/toys');
const generateIds = require('../utils/generateIds');

router.get('/toys', (req, res) => {
  if (req.query.start && req.query.limit) {
    const ids = generateIds(req.query.start, req.query.limit);
    Toys.find({ id: { $in: ids } })
      .then(toys => res.status(200).send(toys))
  } else {
    res.status(400).send('use start and limit queries');
  }
});

module.exports = router;

