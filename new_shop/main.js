'use strict';

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts(); //рекомендация, чтобы метод был вызван в текущем классе
    }

    _fetchProducts() {
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
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML("beforeend", productObj.render());
        }
    }

    getSum() {
        // let sum = 0;
        // this.goods.forEach(item => {
        //     sum += item.price;
        // });
        // reduce используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата
        let result = this.allProducts.reduce((acc, item) => acc + item.price, 0);
        console.log(result);

    }
}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="photo">
                <h3>${this.title}</h3>
                <p class="product__text">${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();
list.render();
list.getSum();

class Basket {

    addGood() {

    }
    removeGood() {

    }

    changeGood() {

    }

    render() {

    }
}

class ElemBasket {
    render() { }
}

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

