/* eslint-disable no-plusplus */
/* eslint no-console: ["error", { allow: ["log"] }] */
const { Restaurant } = require('./restaurant');

const megaRestaurant = new Restaurant();
let tablesCount = 25;

// Tutaj dodaj nasłuchiwanie
let freeTables = 0;
const tablesAviableMessage = () => console.log(`Dostepnych stolików: ${freeTables}.`);

megaRestaurant
  .on('opening', () => {
    freeTables = tablesCount;
    console.log('Otwarto restaurację.');
  })
  .on('closure', () => {
    freeTables = 0;
    console.log('Zamknięto restaurację.');
  })
  .on('table-taken', () => {
    freeTables--;
    tablesAviableMessage();
  })
  .on('table-freed', () => {
    freeTables++;
    tablesAviableMessage();
  })
  .on('table-broken', () => {
    freeTables--;
    tablesCount--;
    tablesAviableMessage();
  });
megaRestaurant.open(); // "Otwarto restaurację."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 24."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 23."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 22."

megaRestaurant.cancelTableReservation(); // "Dostepnych stolików: 23."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 22."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 21."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 20."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 19."

megaRestaurant.cleanupTable(); // "Dostepnych stolików: 20."

megaRestaurant.close(); // "Zamknięto restaurację."
