const { EventEmitter } = require('events');

class Restaurant extends EventEmitter {
  /**
     * Otwarcie restauracji.
     */
  open() {
    // Emit...
    this.emit('opening');
  }

  /**
     * Zamknięcie restauracji.
     */
  close() {
    // Emit...
    this.emit('closure');
  }

  /**
     * Stolik został zarezerowany na teraz.
     * Traktuj to jako po prostu 1 stolik mniej.
     */
  reserveTable() {
    // Emit...
    this.emit('table-taken');
  }

  /**
     * Odwołano rezerwację na stolik.
     * Traktuj to jako po prostu 1 stolik więcej.
     */
  cancelTableReservation() {
    // Emit...
    this.emit('table-freed');
  }

  /**
     * Ktoś wziął stolik bez rezerwacji.
     */
  takeTableWithoutReservation() {
    // Emit...
    this.emit('table-taken');
  }

  /**
     * Stolik się popsuł, odpadła noga :/
     */
  markTableAsBroken() {
    // Emit...
    this.emit('table-broken');
  }

  /**
     * Ktoś skończył jeść, czyścimy stolik i wraca do użytku.
     */
  cleanupTable() {
    // Emit...
    this.emit('table-freed');
  }
}

module.exports = {
  Restaurant,
};
