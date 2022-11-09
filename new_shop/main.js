'use strict';
// при выводе массива по умолчанию запускается метод join, который выводит запятые. Если ничего не хочу видеть при выводе массива клиенту ставля пустые кавычки join(''). Если я хочу выводить с новой строки - join('\n')
const products = [
    { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Mouse', price: 20 },
    { id: 3, title: 'Keyboard', price: 200 },
    { id: 4, title: 'Gamepad', price: 50 },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение

// product - это все параметры объектов из массива products
const renderProduct = (product, img = 'https://via.placeholder.com/200x150') => {
    return `<div class="product-item">
                <img scr="${img}">
                <h3>${product.title}</h3>
                <p class="product__text">${product.price}$</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    document.querySelector('.products').innerHTML =
        (list.map(product => renderProduct(product))).join('');
};

renderPage(products);

    // быстрее будет innerHTML, тк innerHTML() нужен, когда есть цикл
    // const renderPage = list => {
    //     document.querySelector('.products').innerHTML('beforeend', list.map(product => renderProduct(product)).join(''));
    // };
