const pricify = (
    price: number,
    currency: string = 'PLN',
    vat: number = 0.23,
): string => {
  const totalPrice = price + (price * vat);
  return `${totalPrice.toFixed(2)} ${currency}`;
};

console.log(pricify(100));
