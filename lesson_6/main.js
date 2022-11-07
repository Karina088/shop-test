'use strict';

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: '',
        basket: [],
        isVisibleCart: false,
        cart: 0,
        // catalogUrl: '/catalog.json',
        // cartUrl: '/cart.json'
    },

    methods: {
        makeGETRequest(url) {
            return new Promise((resolve) => {
                let xhr;
                if (window.XMLHttpRequest) {
                    xhr = new XMLHttpRequest();
                } else if (window.ActiveXObject) {
                    xhr = new ActiveXObject("Microsoft.XMLHTTP");
                }

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        resolve(xhr.responseText);
                    }
                }
                xhr.open('GET', url, true);
                xhr.send();
            });
        },


        makePOSTRequest(url, data) {
            return new Promise((resolve) => {
                let xhr;
                if (window.XMLHttpRequest) {
                    xhr = new XMLHttpRequest();
                } else if (window.ActiveXObject) {
                    xhr = new ActiveXObject("Microsoft.XMLHTTP");
                }

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        resolve(xhr.responseText);
                    }
                }
                xhr.open('POST', url, true);
                xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
                xhr.send(data);
            });
        },

        filterGoods() {
            const regexp = new RegExp(this.searchLine, 'i');
            this.filteredGoods = this.goods.filter(good =>
                regexp.test(good.product_name));
        },

        /*clickButtonAdd(product_name, price) {
            console.log(product_name, price);
            // return this.basket.push(this.goods);
            this.cart++;
        },*/

        clickButtonAdd(name, price, id) {
            let obj = {
                id: id,
                product_name: name,
                price: price,
            }
            this.makePOSTRequest(`${API_URL}/addToCart`, JSON.stringify(obj)).then((resp) => {
                this.makeGETRequest(`${API_URL}/cart`).then((cart) => {
                    this.basket = JSON.parse(cart);
                });
                this.cart++;

            });
        },

        sumBasket() {
            // return this.basket.reduce((sum, good) => sum + good.price, 0);
        },

        removeToBasket() {
            // return this.basket.splice(this.basket.indexOf(good), 1);

        },

    },

    mounted() {
        this.makeGETRequest(`${API_URL}/catalog`).then((goods) => {
            this.goods = JSON.parse(goods);
            this.filteredGoods = JSON.parse(goods);
            // cb();
        });
    }
});

console.log(app);



/*
function makeGETRequest(url) {
    return new Promise((resolve) => {
        var xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                resolve(xhr.responseText);
            }
        }
        xhr.open('GET', url, true);
        xhr.send();
    });
}


class GoodsItem {
    constructor(product_name, price) {
        this.product_name = product_name;
        this.price = price;
    }

    render() {
        return `<div class="goods-item">
        <h3 class="header_cart">${this.product_name}</h3>
        <p class="par">${this.price} $</p>
        <button class="button_add">Добавить</button></div>`;
    }

}

class GoodsList {
    constructor() {
        this.goods = [];
        this.filteredGoods = [];
    }

    fetchGoods(cb) {
        // this.goods = [
        //     { product_name: 'Shirt', price: 150 },
        //     { product_name: 'Socks', price: 50 },
        //     { product_name: 'Jacket', price: 350 },
        //     { product_name: 'Shoes', price: 250 },
        // ];
        makeGETRequest(`${API_URL}/catalogData.json`).then((goods) => {
            this.goods = JSON.parse(goods);
            this.filteredGoods = JSON.parse(goods);
            cb();
        })
    }

    filterGoods(value) {
        const regexp = new RegExp(value, 'i');
        this.filteredGoods = this.goods.filter(good =>
            regexp.test(good.product_name));
        this.render();
    }

    render() {
        let listHtml = "";
        this.filteredGoods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    calcGoods() {
        return this.goods.reduce((sum, item) => sum + item.price, 0);
    }

}

const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.goods-search');

const list = new GoodsList();
list.fetchGoods(() => {
    list.render();
    list.filterGoods();
    list.calcGoods();
});

searchButton.addEventListener('click', (e) => {
    const value = searchInput.value;
    list.filterGoods(value);
}); 

// lesson 4: дз 2 --------------------------------------------------------------
searchInput.addEventListener('input', (event) => {
    let searchtext = searchInput.value;
    searchtext = event.target.value;
    let pattern = /([a-z])"(?=[a-z])/ig;
    // console.log(searchtext.replace(/'/g, '"'));  дз 1 
    console.log(searchtext.replace(pattern, "$1'"));
}); */

/* lesson 4: дз 1 --------------------------------------------------------------
// const regexp1 = new RegExp(/'/, 'g'); // так тоже работает замена
const valueEl = document.querySelector('input');
const regexp2 = valueEl.value;
const searchtext = searchInput.value;
console.log(regexp2.replace(/'/g, '"')); // так короче запись

*/

/*
class Basket {
    constructor() {
        this.basket = [];
    }

    addGoodToBasket(goods) {
        return this.basket.push(goods);
        // Приходит good push в массив this.basket
    }

    removeGoodToBasket(good) {
        return this.basket.splice(this.basket.indexOf(good), 1);
        // Приходит good удаляем элемент в массиве this.basket
    }

    sumBasket(good) {
        // return this.basket.reduce((sum, goods) => sum + goods.price, 0);
        return this.basket.reduce(function (sum, good) {
            sum += good;
            return sum.concat(good);
        }, 0);
        // Перебор массива с вычислением суммы
    }

    renderGoodBasket() {
        let listHtml = "";
        this.basket.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
        })
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

const baslist = new Basket();
baslist.addGoodToBasket();
baslist.removeGoodToBasket();
baslist.sumBasket();
baslist.renderGoodBasket();


class ElementBasket {
    constructor(product_name, price) {
        this.product_name = product_name;
        this.price = price;
    }

    render() {
        return `<div class="goods-item">
        <h3 class="header_cart">${this.product_name}</h3>
        <p class="par">${this.price} $</p>
        <button class="button_add">Добавить</button></div>`;
    }
}


const menuRightEl = document.querySelector('.menu-right > button');
menuRightEl.classList.add('cart-button');
const buttonAdd = document.querySelector('.button_add');
const basketCounterEl = document.querySelector('.cartWrap span');
const basketTotalValueEl = document.querySelector('.basketTotalValue');
const basketTotalEl = document.querySelector('.basketTotal');
const basketEl = document.querySelector('.basket');

document.querySelector('.cartWrap')
    .addEventListener('click', () => {
        basketEl.classList.toggle('hidden');
    });

*/