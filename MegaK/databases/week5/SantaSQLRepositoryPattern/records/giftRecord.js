const { v4: uuid } = require('uuid');

class GiftRecord {
  constructor(object) {
    if (!object.name || !(typeof object.name === 'string')) {
      throw new Error('attempted to create giftRecord object with no valid name value');
    }
    this.name = object.name;

    if (!((object.quantity instanceof Number) || (typeof object.quantity === 'number'))
      || Number.isNaN(object.quantity)
      || object.quantity === Infinity
      || object.quantity === -Infinity) {
      throw new Error('tried to create a giftRecord object without valid product quantity');
    }
    this.quantity = object.quantity;

    if (!object.id || !(typeof object.id === 'string')) {
      this.id = uuid();
    } else {
      this.id = String(object.id);
    }
  }
}

module.exports = { GiftRecord };
