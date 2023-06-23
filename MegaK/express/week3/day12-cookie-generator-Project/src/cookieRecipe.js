const toppings = [
  { name: 'chockolate', price: 5 },
  { name: 'coconut', price: 10 },
  { name: 'cranberries', price: 4 },
  { name: 'honey', price: 6 },
  { name: 'sprinkles', price: 3 },
];
const doughs = [
  { name: 'chockolate', price: 5 },
  { name: 'rye', price: 5 },
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
