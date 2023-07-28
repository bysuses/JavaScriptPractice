const { Router } = require('express');
const { ChildrenRepository } = require('../repositories/childrenRepository');
const { GiftRepository } = require('../repositories/giftRepository');
const { ChildRecord } = require('../records/childRecord');

const childrenRouter = Router();

childrenRouter
  .get('/', async (req, res) => {
    const children = await ChildrenRepository.findAll();
    const gifts = await GiftRepository.findAll();
    children.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    res.render('children', {
      children,
      gifts,
    });
  })

  .patch('/:childId', async (req, res) => {
    const gift = await GiftRepository.find(req.body.giftId);
    const child = await ChildrenRepository.find(req.params.childId);
    const childrenWithThisGift = await ChildrenRepository.numberHasThisGift(req.body.giftId);

    if (child.giftId === gift.id) {
      res.send('');
      return;
    }

    if (!gift) {
      res.status(400);
      res.send('No such gift');
      return;
    }

    if (!child) {
      res.status(400);
      res.send('No such child');
      return;
    }

    if (gift.quantity <= childrenWithThisGift) {
      res.status(400);
      res.send('Too many children already has this gift');
      return;
    }

    child.giftId = gift.id;
    ChildrenRepository.updateGiftId(child);
    res.send('');
  })

  .post('/', async (req, res) => {
    const childName = req.body['new-child-name'];
    await ChildrenRepository.add(new ChildRecord({ name: childName }));
    res.redirect('/children');
  });

module.exports = { childrenRouter };
