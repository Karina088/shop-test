'use strict';

class Person {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(`Person ${this.name} said his name`);
    }
}

const john = new Person('John');
john.sayName(); // Person John said his name

///////////////////////////////////////////////////////////////

class GreatPerson extends Person {
    constructor(name, phrase) {
        super(name);
        this.phrase = phrase;
    }
    sayPhrase() {
        console.log(`${this.name} says: "${this.phrase}"`)
    }
}

const jane = new GreatPerson('Jane', 'Hello, World!');
jane.sayName(); // Person Jane said his name
jane.sayPhrase(); // Jane says: "Hello, World!" 

/* 
// функция конструктор
let Person = function (name) {
    this.name = name + ' Doe';
};

// запись метода в прототип
Person.prototype.sayName = function () {
    console.log(this.name);
};


// Вызов конструктора родителя внутри дочернего
// конструктора для записи всех свойств
let GreatPerson = function (name, phrase) {
    Person.call(this, name);
    this.phrase = phrase;
};

// Перезапить прототипа дочернего конструктора
GreatPerson.prototype = Object.create(Person.prototype);

GreatPerson.prototype.sayPhrase = function () {
    console.log(this.name + ' says: "' + this.phrase + '"');
};

// создание нового объекта
let john = new Person('John');
let jane = new GreatPerson('Jane', 'Hello, World!');

john.sayName(); // John Doe
jane.sayName(); // Jane Doe
jane.sayPhrase(); // Jane Doe says: "Hello, World!"
*/



// const goods = [
//     { id: 1, title: 'Shirt', price: 150 },
//     { id: 2, title: 'Socks', price: 50 },
//     { id: 3, title: 'Jacket', price: 350 },
//     { id: 4, title: 'Shoes', price: 250 },
// ];

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

// const renderGoodsItem = (title, price, addTo) => {
//   return `<div class="goods-item"><h3 class="header_cart">${title}</h3><p class="par">${price}</p><button class="button_add">${addTo}</button></div>`;
// };

// const renderGoodsList = (list) => {
//   let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.addTo));
//   document.querySelector('.goods-list').innerHTML = goodsList.join('');
// }

// renderGoodsList(goods);