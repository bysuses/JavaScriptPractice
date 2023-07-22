/* eslint-disable no-underscore-dangle */
const { ObjectId } = require('mongodb');
const { todos } = require('../utils/db');

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

  async insert() {
    const { insertedId } = await todos.insertOne({
      title: this.title,
      _id: this._id,
    });
    this._id = insertedId;

    return insertedId;
  }

  async delete() {
    await todos.deleteOne({
      _id: this._id,
    });
  }

  static async find(id) {
    const item = await todos.findOne({ _id: new ObjectId(String(id)) });
    return item === null ? null : new TodoRecord(item);
  }

  static async findAll() {
    const array = await (await todos.find()).toArray();
    return array.map((element) => new TodoRecord(element));
  }

  async update() {
    await todos.replaceOne({
      _id: this._id,
    }, {
      title: String(this.title),
    });
  }
}

module.exports = { TodoRecord };
