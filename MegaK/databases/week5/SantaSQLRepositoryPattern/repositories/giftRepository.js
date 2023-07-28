const { GiftRecord } = require('../records/giftRecord');
const { pool } = require('../utils/db');

class GiftRepository {
  static async find(id) {
    const gift = (await pool.query('SELECT * FROM gifts WHERE gifts.id = ?;', [id]))[0];
    if (!gift[0]) {
      return null;
    }
    return new GiftRecord(gift[0]);
  }

  static async findAll() {
    const gifts = (await pool.query('SELECT * FROM gifts;'))[0];
    return gifts.map((gift) => new GiftRecord(gift));
  }

  static async add(gift) {
    await pool.query('INSERT INTO gifts (name, id, quantity)'
      + 'VALUES (?, ?, ?);', [gift.name, gift.id, gift.quantity]);
  }
}

module.exports = { GiftRepository };
