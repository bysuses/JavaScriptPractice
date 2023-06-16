const express = require('express');

const calcRouter = express.Router();

calcRouter
  .post('/check', (req, res) => {
    const numbers = req.body;
    if (Number(numbers.numA) % Number(numbers.numB) === 0) {
      res.json({ isdivider: true });
      return;
    }
    res.json({ isdivider: false });
  });

module.exports = { calcRouter };
