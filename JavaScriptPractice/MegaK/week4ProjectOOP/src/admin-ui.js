const addProductForm = document.querySelector('.form-add-product');
const nameInput = document.querySelector('[name="product-name"]');
const priceInput = document.querySelector('[name="product-price"]');
const productsList = document.querySelector('.products-list');

const saveProductsToLocalStorage = (name, price) => {
    const productsList = JSON.parse(localStorage.getItem('shop-products')) ?? [];
    productsList.push({ name, price });
    localStorage.setItem('shop-products', JSON.stringify(productsList));
};

const loadProductsFromLocalStorage = () => {
    const productsList = JSON.parse(localStorage.getItem('shop-products')) ?? [];
    for (const product of productsList) {
        addProductToShop(product.name, product.price);
    }
};

const addProductToShop = (name, price) => {
    const newLi = document.createElement('li');

    const newStrong = document.createElement('strong');
    newStrong.innerText = name;

    const newPrice = document.createTextNode(` - ${price.toFixed(2)}zł`);

    const newBtn = document.createElement('button');
    newBtn.classList.add('btn-buy-product');
    newBtn.dataset.name = name;
    newBtn.dataset.price = String(price);
    newBtn.innerText = 'Kup!';
    newBtn.addEventListener('click', addProductToCart);

    newLi.appendChild(newStrong);
    newLi.appendChild(newPrice);
    newLi.appendChild(newBtn);

    productsList.appendChild(newLi);
};

const handleAddProductToShopFormSubmit = event => {
    event.preventDefault();
    const name = nameInput.value;
    const price = Number(event.target.elements['product-price'].value);

    addProductToShop(name, price);
    saveProductsToLocalStorage(name, price);

}

addProductForm.addEventListener('submit', handleAddProductToShopFormSubmit);
loadProductsFromLocalStorage();