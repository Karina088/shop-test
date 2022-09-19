const goods = [
    { id: 1, title: 'Shirt', price: 150 },
    { id: 2, title: 'Socks', price: 50 },
    { id: 3, title: 'Jacket', price: 350 },
    { id: 4, title: 'Shoes', price: 250 },
];

// const renderGoodsItem = (title, price, addTo) => {
//   return `<div class="goods-item"><h3 class="header_cart">${title}</h3><p class="par">${price}</p><button class="button_add">${addTo}</button></div>`;
// };

// const renderGoodsList = (list) => {
//   let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.addTo));
//   document.querySelector('.goods-list').innerHTML = goodsList.join('');
// }

// renderGoodsList(goods);


/**
 * Функция формирует разметку для каждого продукта
 * @param item - это каждый объект массива
 * @returns {string}
 */
const renderGoodsItem = (item) => {
    return `<div class="goods-item">
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
    document.querySelector('.goods').innerHTML = list.map(item => renderGoodsItem(item)).join('');
};

renderGoodsList(goods);


  // ответ на 3 вопрос:
  // innerHTML - показывает весь текст внутри элемента div
  // метод join('') склеивает, поэтому запятых больше у меня нет

