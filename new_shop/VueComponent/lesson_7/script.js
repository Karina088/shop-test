// const c = require('./func');
// console.log(c.func.a(10));
// console.log(c.func.b(10));

// модуль nodejs
// cpus() Возвращает массив объектов, содержащий информацию о каждом логическом ядре ЦП.
// const os = require('os');
// console.log(os.cpus());
/*
// работа с файлами
const fs = require('fs');
// запись данный в файл
let users = [{ name: "Ivan", id: 10 }];
fs.writeFile('test.json', JSON.stringify(users), err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Данные записаны!');
    }
});

// чтение данный из файла
let user = '{"name": "Petr", "id": 15}'
fs.readFile('test.json', 'utf-8', (err, data) => { // data - исходник файла
    if (err) {
        console.log(err);
    } else {
        let users = JSON.parse(data);
        users.push(JSON.parse(user));
        fs.writeFile('test.json', JSON.stringify(users), err => {
            if (err) {
                console.log(err);
            } else {
                console.log('Данные записаны!');
            }
        });
    }
});
*/

// Внешние модули, 
// то есть я импортировала модуль, которого нет в ноде
// const moment = require('moment');
// разработчики создали модуль moment, его документация - https://momentjs.com/
//console.log(moment().format('MMMM Do YYYY, h:mm:ss a')); // November 21st 2022, 7:59:31 pm


const http = require('http');
// Модуль http служит для обработки запросов на стороне сервера
// REST API - это механизм для обработки запросов на сервере, поступающих от клиента по протоколу HTTP. При запросе к серверу клиент сообщает какой метод из HTTP выполняет запрос. То есть, чтобы сделать запрос к серверу необходимо указать метод запроса HTTP:
// 1) GET - используется для получения данных от сервера;
// 2) POST - используется для вставки данных (может содержать тело запроса HTTP);
// 3) PUT - используется для обновления данных (может содержать тело запроса HTTP);
// 4) DELETE -  используется для удаления данных


const server = http.createServer((req, res) => {
    // req - это объект для получения данных от клиента
    // res - это объект для отправки данных от сервера к клиенту
    if (req.url == '/') { // если пользователь открывает в браузере главную страницу
        res.write('Welcome to server!!!!!!!');
        res.end();
    }
});
server.on('connection', socket => {
    // socket - это глобальный объект, который позволяет серверу отвечать на запросы клиента в режиме онлайн
    console.log('Соединение к серверу установлено клиентом');
});

server.listen('3000'); // localhost:3000/


