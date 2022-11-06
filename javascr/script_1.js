'use strick';

const goods = [
    { id: 1, title: 'Shirt', price: 150 },
    { id: 2, title: 'Socks', price: 50 },
    { id: 3, title: 'Jacket', price: 350 },
    { id: 4, title: 'Shoes', price: 250 },
];

/**
 * Функция формирует разметку для каждого продукта
 * @param item - это каждый объект массива
 * @returns {string}
 */
const renderGoodsItem = (item) => {
    return `<div class="goods-item" data-id="" data-name="" data-price="">
    <h3 class="header_cart">${item.title}</h3>
    <img class="image" src="img/${item.id}.jpg" alt="photo">
    <p class="par">${item.price} $</p>
    <button class="button_add">Добавить</button></div>`;
};

/**
 * Функция создает список товаров из массива и добавляет его в div.goods
 * @param list
 */
const renderGoodsList = list => {
    document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item)).join('');
};

renderGoodsList(goods);

const catrBtnEl = document.querySelector('button').classList.add('cart-button');

// чтобы мне реализовать общую сумму, список в шт, добавленных товаров с названием и ценой - необходимо, чтобы в коде html был записан весь div вместе с атрибутами - с которомы я бы могла работать, но тогда это не про наш код и фуркции. Как сделать с функцией renderGoodsList, возвращающей код html - без понятия. Напишите мне здесь код, как это реализовать с атрибутами data-id="" data-name="" data-price="", используя данный код

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

const basket = {};

document.querySelector('.goods')
    .addEventListener('click', event => {
        if (!event.target.closest('.button_add')) {
            return;
        }
        const catalogCard = event.target.closest('.goods-item');
        const id = +catalogCard.dataset.id;
        const name = catalogCard.dataset.name;
        const price = +catalogCard.dataset.price;
        buttonAdd(id, name, price);
    });

function addToCart(id, name, price) {
    if (!(id in basket)) {
        basket[id] = { id: id, name: name, price: price, count: 0 };
    }
    basket[id].count++;
    basketCounterEl.textContent = getTotalBasketCount().toString();
    basketTotalValueEl.textContent = getTotalBasketPrice().toFixed(2);
}

function getTotalBasketCount() {
    return Object.values(basket)
        .reduce((accum, product) => accum + product.count, 0);
}

function getTotalBasketPrice() {
    return Object.values(basket)
        .reduce((accum, product) => accum + product.count * product.price, 0);
}
