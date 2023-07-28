const { v4: uuid } = require('uuid');

class ChildRecord {
  constructor(object) {
    if (!object) {
      throw new Error('Attempted to create a child from empty data.');
    }
    if (!object.name || !(typeof object.name === 'string')) {
      throw new Error('Tried to create a child with no name.');
    }

    if (!object.id || !(typeof object.id === 'string')) {
      this.id = uuid();
    } else {
      this.id = String(object.id);
    }

    this.giftId = object.giftId;
    this.name = String(object.name);
  }
}

module.exports = { ChildRecord };
