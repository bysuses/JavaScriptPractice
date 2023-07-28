const { Router } = require('express');
const { GiftRepository } = require('../repositories/giftRepository');
const { GiftRecord } = require('../records/giftRecord');

const giftsRouter = Router();

giftsRouter

  .get('/', async (req, res) => {
    const gifts = await GiftRepository.findAll();
    res.render(
      'gifts',
      {
        gifts,
      },
    );
  })

  .post('/', (req, res) => {
    const giftRecord = new GiftRecord(
      {
        name: req.body.giftName,
        quantity: Number(req.body.giftQuantity),
      },
    );
    GiftRepository.add(giftRecord);
    res.redirect('/gifts');
  });

module.exports = { giftsRouter };
