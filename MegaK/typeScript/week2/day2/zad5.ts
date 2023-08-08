interface Product {
  name: string;
  count: number;
  isDegradeable: boolean;
}


const product :Product = {
  name: 'Opakowanie zbiorcze',
  count: 1000,
  isDegradeable: true,
};

function getProductProp(
    obj :Product,
    propName :keyof Product,
): string|undefined|number|boolean {
  return obj[propName];
}

const count = getProductProp(product, 'count') as number;
const degraded = getProductProp(product, 'isDegradeable') as boolean;
console.log(`${count.toFixed(2)} ${degraded? 'degraded' : 'undegraded'}`);
