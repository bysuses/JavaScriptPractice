class Cart {
    constructor() {
        this.items = this.loadFromLocalStorage() ?? [];
    }
    addItem(item) {
        this.items.push(item);
        this.saveToLocalStorage();
    }
    getTotalPrice() {
        return this.items.reduce((acc, current) => current.price + acc, 0);
    }
    displayCartToConsole() {
        this.items.forEach((item, index, array) => {
            console.log(`${index + 1}. ${item.name} - ${item.price.toFixed(2)}zł`);
        });
    }
    getCartSummary() {
        return this.items.map((item, index, array) => {
            return {
                text: `${index + 1}. ${item.name} - ${item.price.toFixed(2)}zł`,
                id: index + 1,
            }
            //`${index + 1}. ${item.name} - ${item.price.toFixed(2)}zł`;
        })
    }
    removeItemByNumber(no) {
        this.items.splice((no - 1), 1);
        this.saveToLocalStorage();
    }
    clearCart() {
        this.items = [];
        //this.items.splice(0);
        //this.items.length = 0;
        this.saveToLocalStorage();
    }
    saveToLocalStorage() {
        localStorage.setItem('cart-items', JSON.stringify(this.items));
    }
    loadFromLocalStorage() {
        return JSON.parse(localStorage.getItem('cart-items'));
    }
}


class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    setNewPrice(newPrice) {
        this.price = newPrice;
    }
}
