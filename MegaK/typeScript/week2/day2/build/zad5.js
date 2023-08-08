const product = {
    name: 'Opakowanie zbiorcze',
    count: 1000,
    isDegradeable: true,
};
function getProductProp(obj, propName) {
    return obj[propName];
}
const count = getProductProp(product, 'count');
const degraded = getProductProp(product, 'isDegradeable');
console.log(`${count.toFixed(2)} ${degraded ? 'degraded' : 'undegraded'}`);
//# sourceMappingURL=zad5.js.map