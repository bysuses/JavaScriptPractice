const { ValidationError } = require('../utils/errors');

class Client {
  constructor(obj) {
    const {
      name,
      id,
      email,
      nextContactAt,
      notes,
    } = obj;

    if (!name || typeof name !== 'string' || name.length < 3) {
      throw new ValidationError('Imię musi być tekstem o długości min. 3 znaków');
    }
    if (!id || typeof id !== 'string') {
      throw new ValidationError('Id musi być niepustym tekstem');
    }
    if (!email || typeof email !== 'string' || email.indexOf('@') === -1) {
      throw new ValidationError('Email nieprawidłowy');
    }
    if (typeof nextContactAt !== 'string') {
      throw new ValidationError('Data następnego kontaktu musi być tekstem');
    }
    if (typeof notes !== 'string') {
      throw new ValidationError('Notatki muszą być tekstem');
    }

    this.id = id;
    this.name = name;
    this.email = email;
    this.nextContactAt = nextContactAt;
    this.notes = notes;
  }
}

module.exports = {
  Client,
};
