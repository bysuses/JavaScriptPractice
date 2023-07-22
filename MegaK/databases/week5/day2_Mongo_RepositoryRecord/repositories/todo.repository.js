/* eslint-disable no-underscore-dangle */
const { ObjectId } = require('mongodb');
const { TodoRecord } = require('../records/todo.record');
const { todos } = require('../utils/db');

class TodoRepository {
  static _checkRecord(record) {
    if (!(record instanceof TodoRecord)) {
      throw new Error('record must be an instance of TodoRecord');
    }
  }

  static async insert(record) {
    TodoRepository._checkRecord(record);
    const { insertedId } = await todos.insertOne(record);
    // eslint-disable-next-line no-param-reassign
    record._id = insertedId;

    return insertedId;
  }

  static async delete(record) {
    TodoRepository._checkRecord(record);
    todos.deleteOne({
      _id: record._id,
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

  static async update(record) {
    TodoRepository._checkRecord(record);

    await todos.replaceOne({
      _id: record._id,
    }, {
      title: String(record.title),
    });
  }
}

module.exports = { TodoRepository };
