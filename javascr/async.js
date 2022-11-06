'use strict';

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

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
        // return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
    }

}

class GoodsList {
    constructor() {
        this.goods = [];
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
            cb();
        });
    }


    render() {
        let listHtml = "";
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
        })
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    calcGoods() {
        return this.goods.reduce((sum, item) => sum + item.price, 0);
    }
}

const list = new GoodsList();
list.fetchGoods(() => {
    list.render();
    list.calcGoods();
});



class Basket {
    constructor() {
        this.basket = [];
    }

    addGoodToBasket(good) {
        return this.basket.push(good);
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


const catrBtnEl = document.querySelector('button').classList.add('cart-button');
// const menuRightEl = document.querySelector('.menu-right > button');
// menuRightEl.classList.add('cart-button');

const buttonEl = document.querySelector('.cart-button');
const buttonAdd = document.querySelector('.button_add');
const basketCounterEl = document.querySelector('.cartWrap span');
const basketTotalValueEl = document.querySelector('.basketTotalValue');
const basketTotalEl = document.querySelector('.basketTotal');
const basketEl = document.querySelector('.basket');

document.querySelector('.cartWrap')
    .addEventListener('click', () => {
        basketEl.classList.toggle('hidden');
    });

