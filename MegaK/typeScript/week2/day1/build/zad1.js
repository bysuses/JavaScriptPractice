const pricify = (price, currency = 'PLN', vat = 0.23) => {
    const totalPrice = price + (price * vat);
    return `${totalPrice.toFixed(2)} ${currency}`;
};
console.log(pricify(100));
//# sourceMappingURL=zad1.js.map