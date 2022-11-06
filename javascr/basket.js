'use strick';

class GoodsItem {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    } render() {
        return `<div class="goods-item">
        <h3 class="header_cart">${this.title}</h3>
        <img class="image" src="img/${this.id}.jpg" alt="photo">
        <p class="par">${this.price} $</p>
        <button class="button_add">Добавить</button></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { id: 1, title: 'Shirt', price: 150 },
            { id: 2, title: 'Socks', price: 50 },
            { id: 3, title: 'Jacket', price: 350 },
            { id: 4, title: 'Shoes', price: 250 },
        ];
    }
    calcGoods() {
        return this.goods.reduce((sum, item) => sum + item.price, 0);
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.id, good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.calcGoods();

const catrBtnEl = document.querySelector('button').classList.add('cart-button');
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
