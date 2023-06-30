const toppings = [
  { name: 'czekolada', price: 5 },
  { name: 'kokos', price: 10 },
  { name: 'żurawina', price: 4 },
  { name: 'miód', price: 6 },
  { name: 'posypka', price: 3 },
];
const doughs = [
  { name: 'czekoladowe', price: 5 },
  { name: 'żytnie', price: 5 },
];

class CookieRecipe {
  constructor() {
    this.doughs = doughs;
    this.toppings = toppings;
  }

  returnJson() {
    return JSON.stringify({
      doughs: this.doughs,
      toppings: this.toppings,
    });
  }
}

module.exports = { CookieRecipe };
