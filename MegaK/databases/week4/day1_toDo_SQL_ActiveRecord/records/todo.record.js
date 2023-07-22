/* eslint-disable no-underscore-dangle */
const { v4: uuid } = require('uuid');
const { pool } = require('../utils/db');

class TodoRecord {
  constructor(obj) {
    this.id = obj.id;
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
    this._validate();
    this.id = this.id ?? uuid();
    await pool.execute('INSERT INTO `todos` VALUES (?, ?)', [this.id, this.title]);
    return this.id;
  }

  async update() {
    if (!this.id) {
      throw new Error('Todo has no id.');
    }
    this._validate();
    await pool.execute('UPDATE `todos`'
      + 'SET `title`= :title'
      + 'WHERE `id`= :id', { title: this.title, id: this.id });
    return this.id;
  }

  async delete() {
    if (!this.id) {
      throw new Error('Todo has no id.');
    }
    await pool.execute('DELETE FROM `todos` WHERE `todos`.`id` = ?', [this.id]);
  }

  static async find(id) {
    const [results] = await pool.execute('SELECT * FROM `todos` WHERE `todos`.`id` = ?', [id]);
    if (results.length === 0) {
      return null;
    }
    return new TodoRecord(results[0]);
  }

  static async findAll() {
    const [results] = await pool.execute('SELECT * FROM `todos`');
    if (results.length === 0) {
      return [];
    }
    return results.map((obj) => new TodoRecord(obj));
  }
}

module.exports = { TodoRecord };
