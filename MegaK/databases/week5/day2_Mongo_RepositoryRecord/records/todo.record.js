/* eslint-disable no-underscore-dangle */
const { ObjectId } = require('mongodb');

class TodoRecord {
  constructor(obj) {
    this._id = new ObjectId(obj._id);
    this.title = obj.title;
    this._validate();
  }

  _validate() {
    if (this.title.trim() < 5) {
      throw new Error('Todo title should be at least 5 characters long.');
    }
    if (this.title.lenght > 150) {
      throw new Error('Todo title should be at most 150 characters long.');
    }
  }
}

module.exports = { TodoRecord };
