'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        filtered: [],
        imgCatalog: 'https://via.placeholder.com/200x150',
        userSearch: '',
        show: false
    },
    methods: {
        filter() {
            const regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(product => regexp.text(product.product_name));
        },
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {
            console.log(product.id_product);
        }
    },
    mounted() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            });
        this.getJson(`getProducts.json`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            }),
            this.getJson(`${API + this.catalogUrl}`)
                .then(data => {
                    for (let el of data) {
                        this.filtered.push(el);
                    }
                });
        this.getJson(`getProducts.json`)
            .then(data => {
                for (let el of data) {
                    this.filtered.push(el);
                }
            })
    }
})

// class ProductsList {
//     constructor(container = '.products') {
//         this.container = container;
//         this.goods = [];
//         // this.allProducts = [];
//         this._getProducts()
//             .then(data => { // data - объект js
//                 this.goods = data;
//                 this.render()
//             });
//     }

//     _getProducts() {
//         return fetch(`${API}/catalogData.json`)
//             .then(result => result.json())
//             .catch(error => {
//                 console.error(error);
//             });
//     }

//     calcSum() {
//         return this.allProducts.reduce((acc, item) => acc + item.price, 0);
//     }
//     render() {
//         const block = document.querySelector(this.container);
//         for (let product of this.goods) {
//             const productObj = new ProductItem(product);
//             // this.allProducts.push(productObj);
//             block.insertAdjacentHTML("beforeend", productObj.render());
//         }
//     }
// }

// class ProductItem {
//     constructor(product, img = 'https://via.placeholder.com/200x150') {
//         this.title = product.product_name;
//         this.price = product.price;
//         this.id = product.id_product;
//         this.img = img;
//     }
//     render() {
//         return `<div class="product-item" data-id="${this.id}">
//                 <img src="${this.img}" alt="photo">
//                 <h3>${this.title}</h3>
//                 <p class="product__text">${this.price}</p>
//                 <button class="buy-btn">Купить</button>
//             </div>`
//     }
// }

// let list = new ProductsList();
// // list.render();
// // list.calcSum();


// class Basket {
//     // запускается контейнер, он содержит значение по умолчанию, который означает, что мы хотим вывести товары в этом элементе
//     constructor(container = '.menu-block') {
//         this.container = container;
//         this.basket = []; // массив товаров, заполнить массив на основе внешнего файла json

//         this._clickBasket();
//         this._getBasketItem()
//             .then(data => { // data - объект js
//                 this.goods = data.contents;
//                 this.render();
//             });
//     }

//     _getBasketItem() {
//         return fetch(`${API}/getBasket.json`)
//             .then(result => result.json())
//             .catch(error => {
//                 console.log(error);
//             })
//     }

//     render() {
//         const block = document.querySelector(this.container);
//         for (let product of this.goods) {
//             const profuctObj = new BasketItem();
//             block.insertAdjacentHTML('beforeend', profuctObj.render(product));
//         }
//     }

//     _clickBasket() {
//         document.querySelector('.btn-cart').addEventListener('click', () => {
//             document.querySelector(this.container).classList.toggle('invisible');
//         });
//     }
// }

// class BasketItem {
//     render(product, img = 'https://via.placeholder.com/50x50') {
//         return `<div class="cart-item" data-id="${product.id_product}">
//         <div class="product-bio">
//         <img src="${img}" alt="Some image">
//         <div class="product-desc">
//         <p class="product-title">${product.product_name}</p>
//         <p class="product-quantity">Quantity: ${product.quantity}</p>
//         <p class="product-single-price">${product.price} each</p>
//     </div>
//     </div>
//     <div class="right-block">
//         <p class="product-price">${product.quantity * product.price}</p>
//         <button class="del-btn" data-id="${product.id_product}">&times;</button>
//     </div>
//     </div> `
//     }
// }

// const basketList = new Basket();

