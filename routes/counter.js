'use strict';

const express = require('express');
const router = express.Router();

let count = 1;

router.route('/')
  .get((req, res) => {
    res.json({count});
  });

module.exports = router;