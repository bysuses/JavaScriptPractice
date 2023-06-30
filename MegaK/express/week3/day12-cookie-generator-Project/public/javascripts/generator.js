/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */

// -------------------------------------------------------------------------------------------------
// VARIABLES
const doughs = [];
const toppings = [];

const priceTd = document.querySelector('.price-td');
const ingriedientsTd = document.querySelector('.ingriedients-td');
const button = document.querySelector('.order-button');

// -------------------------------------------------------------------------------------------------
// FUNCTIONS

// fills the result table in HTML with information
function fillResultTable() {
  let ingriedientaChosenString = 'Ciasto: ';
  let totalPrice = 0;

  for (const dough of doughs) {
    if (dough.flag) {
      totalPrice += dough.price;
      ingriedientaChosenString += `${dough.name}, \n`;
    }
  }
  ingriedientaChosenString += '\nDodatki: ';
  for (const topping of toppings) {
    if (topping.flag) {
      totalPrice += topping.price;
      ingriedientaChosenString += `${topping.name}, `;
    }
  }
  priceTd.innerText = `${String(totalPrice)}zł`;
  ingriedientsTd.innerText = ingriedientaChosenString;
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

// enables the order button when a dough is selected
function updateOrderButton() {
  for (const dough of doughs) {
    // only if a dough is chosen
    if (dough.flag === true) {
      button.removeAttribute('disabled');
      return;
    }
    button.setAttribute('disabled', 'disabled');
  }
}
// -------------------------------------------------------------------------------------------------
// CODE

// writes 'Ciasto: Dodatki:' in the inner text
fillResultTable();

// filling the doughs array with objects contaigning html element,
// doughs name, flag. Flag is saying if the dough is used
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

// add to each dough element an event listener and fills its inner text
doughs.forEach((dough) => {
  dough.element.innerText = `${dough.name} ${dough.price}zł`;
  dough.element.addEventListener('click', () => {
    updateDoughFlags(dough.name);
    fillResultTable();
    updateOrderButton();
  });
});
// add to each topping element an event listener and fills its inner text
toppings.forEach((topping) => {
  topping.element.innerText = `${topping.name} ${topping.price}zł`; // set inner text
  topping.element.addEventListener('click', () => {
    updateToppingsFlags(topping.name); // topping selected set flag to true, when unselected false
    fillResultTable(); // fills the summary table at the page,
  });
});

button.addEventListener('click', async () => {
  const body = { dough: null, toppings: [] };
  for (const dough of doughs) {
    if (dough.flag) body.dough = dough.name;
  }
  for (const topping of toppings) {
    if (topping.flag) body.toppings.push(topping.name);
  }
  const response = await fetch('/cookie/generated', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (response.redirected) {
    window.location.href = response.url;
  }
});
