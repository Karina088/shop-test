'use strict';

// найти стоимость всех товаров
// спроектировать классы корзина и товаров корзинки, заполнить их свойствами и методами -пустые
class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.fetchProducts(); //рекомендация, чтобы метод был вызван в текущем классе
        this.render(); //вывод товаров на страницу
    }

    getSum() {

        // найти стоимость всех товаров this.goods через forEach
    }

    fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
            // block.innerHTML += item.render();
        }
    }
}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render() {
        return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p class="product__text">${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();


// const products = [
//     { id: 1, title: 'Notebook', price: 2000 },
//     { id: 2, title: 'Mouse', price: 20 },
//     { id: 3, title: 'Keyboard', price: 200 },
//     { id: 4, title: 'Gamepad', price: 50 },
// ];
// const renderProduct = (product, img = 'https://via.placeholder.com/200x150') => {
//     return `<div class="product-item">
//                 <img scr="${img}">
//                 <h3>${product.title}</h3>
//                 <p class="product__text">${product.price}$</p>
//                 <button class="buy-btn">Купить</button>
//             </div>`
// };
// const renderPage = list => {
//     document.querySelector('.products').innerHTML =
//         (list.map(product => renderProduct(product))).join('');
// };
// renderPage(products);

