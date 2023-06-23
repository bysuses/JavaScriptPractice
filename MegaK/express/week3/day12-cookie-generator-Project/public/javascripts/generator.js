/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
const doughs = [];
const toppings = [];

// filling the doughs array with objects contaigning html element,
// doughs name and flag saying if the dough is used
for (const doughNamePrice of recipe.doughs) {
  doughs.push({
    element: document.querySelector(`.${doughNamePrice.name}-dough`),
    name: doughNamePrice.name,
    flag: false,
    price: doughNamePrice.price,
  });
}

// simillarily fill the toppings array
for (const toppingNamePrice of recipe.toppings) {
  toppings.push({
    element: document.querySelector(`.${toppingNamePrice.name}-topping`),
    name: toppingNamePrice.name,
    flag: false,
    price: toppingNamePrice.price,
  });
}

function setToppingsFlagsFalse() {
  for (const topping of toppings) {
    topping.flag = false;
  }
}

function updateDoughFlags(name) {
  // set the dough flad so only one is correct
  for (const dough of doughs) {
    if (dough.name === name) {
      dough.flag = !dough.flag;
    } else {
      dough.flag = false;
    }
  }
  // if there is a dough chosen return
  for (const dough of doughs) {
    if (dough.flag === true) return;
  }
  // if there is no dough chosen remove all topping
  setToppingsFlagsFalse();
}

function updateToppingsFlags(name) {
  for (const dough of doughs) {
    // only if a dough is chosen
    if (dough.flag === true) {
      // search for a topping with the given name
      for (const topping of toppings) {
        if (topping.name === name) {
          // change its flag
          topping.flag = !topping.flag;
        }
      }
    }
  }
}

doughs.forEach((dough) => {
  dough.element.innerText = `${dough.name} ${dough.price}zł`;
  dough.element.addEventListener('click', () => {
    updateDoughFlags(dough.name);
    console.log(doughs);
  });
});

toppings.forEach((topping) => {
  topping.element.innerText = `${topping.name} ${topping.price}zł`;
  topping.element.addEventListener('click', () => {
    updateToppingsFlags(topping.name);
    console.log(toppings);
  });
});
