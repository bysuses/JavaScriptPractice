/* eslint-disable no-underscore-dangle */
const { readFile } = require('fs').promises;
const { writeFileSync } = require('fs');
const { join } = require('path');
const { v4: uuid } = require('uuid');
const { Client } = require('../records/client');

class Db {
  constructor(dbFilename) {
    this.dbFilename = join(__dirname, '../data', dbFilename);
    this._load();
  }

  async _load() {
    this._data = JSON.parse(await readFile(this.dbFilename, 'utf8')).map((obj) => new Client(obj));
  }

  _save() {
    writeFileSync(this.dbFilename, JSON.stringify(this._data));
  }

  create(obj) {
    const id = uuid();
    this._data.push(new Client({
      id,
      ...obj,
    }));
    this._save();
    return id;
  }

  getAll() {
    return this._data;
  }

  getOne(id) {
    return this._data.find((oneObj) => oneObj.id === id);
  }

  update(id, newObj) {
    this._data = this._data.map((oneObj) => {
      if (oneObj.id === id) {
        return {
          ...oneObj,
          ...newObj,
        };
      }
      return oneObj;
    });
    this._save();
  }

  delete(id) {
    const index = this._data.findIndex((element) => element.id === id);
    if (index > -1) {
      this._data.splice(index, 1);
    }
    this._save();
  }
}

const db = new Db('client.json');

module.exports = { db };
