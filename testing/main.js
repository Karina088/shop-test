'use strict';
/*
let a = 5;
let b = "5";

let sum = a + + b;
alert(sum); // 10*/
/*
const promise = new Promise((resolve, reject) => setTimeout(() => {
    console.log(1);
    reject("2");
}, 1000));
promise.then((result) => console.log(2)).catch((result) => console.log(3)); // 1 3
*/

/*
// будет ошибка - Не удалось загрузить ресурс: net::ERR_FAILED
Uncaught(в обещании) TypeError: Failed to fetch
fetch('www.google.com').then(response => { console.log(response.status) })
*/

// let found = document.qetElementsByClassName('#MyId');

// alert('привет, geekbrains'.slice(-10));
// const a = [1, 2, 3, 4, 5];
// let but = a.filter((i, el) => el !== 4);
// console.log(but);

// const r = /\d*/.exec("У вани было 5 яблок, а у Пети 4").index; // 0
// console.log(r);

// const a = /abc/;
// let b = typeof (a + 1); // sting
// console.log(b);

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }; // от 0 до 10 покажет


// // Для чего нужны методы JSON parse () и JSON Stringify ()?
// Метод JSON. parse() принимает строку JSON и преобразует ее в объект JavaScript. JSON. stringify(), наоборот, принимает объект JavaScript и преобразует его в строку JSON.
// console.log(JSON.parse(JSON.stringify(object)));

// const obj = {
//     name: "Ivan",
//     age: 25
// };

// const obj2 = obj;
// obj2.age += 5;
// console.log(obj.age); // 30


// console.log(/\s+/.exec("9,8,7,6,5,4,3,2,1 start!").index); // 17

// let a = [1, 2, 3, 4, 5, 6, 7, 8];
// let b = [...a.slice(0, 5), 6, ...a.slice(5)];
// console.log(b); // (9) [1, 2, 3, 4, 5, 6, 6, 7, 8]

/*let f = () => () => (2); // какой тип вернет эта функция
console.log(typeof f); // function*/

// const a = null;
// console.log(a == undefined); // true
// console.log(a == null); // true
// console.log(a === undefined); // false
// console.log(a === null); // true

// Что такое REST API
// Representational State Transfer (REST) в переводе — это передача состояния представления. Технология позволяет получать и модифицировать данные и состояния удаленных приложений, передавая HTTP-вызовы через интернет или любую другую сеть.

// Если проще, то REST API — это когда серверное приложение дает доступ к своим данным клиентскому приложению по определенному URL.
// Application Programming Interface (API), или программный интерфейс приложения — это набор инструментов, который позволяет одним программам работать с другими. API предусматривает, что программы могут работать в том числе и на разных компьютерах. В этом случае требуется организовать интерфейс API так, чтобы ПО могло запрашивать функции друг друга через сеть.

// const a = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(a.slice(-6));

const foo = ({ a, b, c }) => { a, b, c };
console.log(foo);

// let arr = [1, 2, 3, 4, 5, 6];
// let b = [...arr.slice(0, 5), ...arr.slice(6)];
// // let c = arr.map((el, ind) => ind !== 5);
// let c = arr.filter((el, ind) => ind === 5);
// console.log(c);

// const a = /abc/;
// const b = /def/;
// console.log(a + b);

// const a = 5;
// const b = prompt('введите число:');
// console.log(a == b);

// let c = +!null;
// console.log(c);

// const a = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
// const b = new Set(a);
// let cn = b.join('');
// console.log(cn);

const cities = ['moscow', 'paris', 'berlin', 'london'];
const city = [...cities];
console.log(city);

const a = 5;
const b = a => a;
console.log(b);