const { ChildRecord } = require('../records/childRecord');
const { pool } = require('../utils/db');

class ChildrenRepository {
  static async find(id) {
    const child = (await pool.query('SELECT * FROM children WHERE children.id = ?;', [id]))[0];
    if (!child[0]) {
      return null;
    }
    return new ChildRecord(child[0]);
  }

  static async findAll() {
    const children = (await pool.query('SELECT * FROM children;'))[0];
    return children.map((child) => new ChildRecord(child));
  }

  static async add(child) {
    if (!child.giftId) {
      await pool.query('INSERT INTO children (name, id)'
        + 'VALUES (?, ?);', [child.name, child.id]);
    } else {
      await pool.query('INSERT INTO children (name, id, giftId)'
        + 'VALUES (?, ?, ?);', [child.name, child.id, child.giftId]);
    }
  }

  static async updateGiftId(child) {
    await pool.query('UPDATE children SET giftId = ? WHERE id = ?;', [child.giftId, child.id]);
  }

  static async numberHasThisGift(id) {
    const returnedValue = await pool.query('SELECT COUNT(*) FROM children WHERE giftId = ?;', [id]);
    return returnedValue[0][0]['COUNT(*)']; // returns the count
  }
}

module.exports = { ChildrenRepository };
