const buyBtns = [...document.querySelectorAll('[data-name]')];
const cartUl = document.querySelector('.cart-list');
const buyAllBtn = document.querySelector(".button-buy-all");

const cart = new Cart();

const createCartUi = () => {
    const removeItem = event => {
        cart.removeItemByNumber(Number(event.target.dataset.id));
        createCartUi();
    }
    cartUl.innerText = "";
    for (const oneProductInfo of cart.getCartSummary()) {
        const newLi = document.createElement('li');
        newLi.innerText = oneProductInfo.text;
        newLi.dataset.id = oneProductInfo.id;
        newLi.addEventListener('click', removeItem);
        cartUl.appendChild(newLi);
    }
};

const refreshBuyAllBtn = () => {
    const shoppingTotalPrice = cart.getTotalPrice();
    buyAllBtn.innerText = `Złóż zamówienie na kwotę ${shoppingTotalPrice.toFixed(2)}zł`;
    if (shoppingTotalPrice > 0) buyAllBtn.removeAttribute('disabled');
    else buyAllBtn.setAttribute("disabled", 'true');
};

const addProductToCart = event => {
    const name = event.target.dataset.name;
    const price = Number(event.target.dataset.price);
    const newProduct = new Product(name, price);
    cart.addItem(newProduct);
    createCartUi();
    refreshBuyAllBtn();
};

const buyAllProducts = event => {
    alert(`Zakupiono towary za ${cart.getTotalPrice().toFixed(2)}`);
    cart.clearCart();
    createCartUi();
    refreshBuyAllBtn();
};


for (const btn of buyBtns) {
    btn.addEventListener('click', addProductToCart);
}
buyAllBtn.addEventListener('click', buyAllProducts);
createCartUi();
refreshBuyAllBtn();
