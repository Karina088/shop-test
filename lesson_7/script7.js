'use strict';
/*
const http = require('http');
const static = require('node-static');

const file = new static.Server('.');

// request - запрос, response - отклик
// создание сервера 
http.createServer((req, res) => {
    file.serve(req, res);
}).listen(3000); // указываем порт 3000, localhost:3000
*/

//работа с файловой системой
// нужно создать json file, например, ./data.json, по умолчанию - utf-8 и указываем callback (err, data) => {}
/* const fs = require('fs');

fs.readFile('./data.json', 'utf-8', (err, data) => {
    if (!err) {
        const obj = JSON.parse(data);
        console.log(obj);

        obj.third = 3;

        fs.writeFile('./data.json', JSON.stringify(obj), (err) => { })
    }
})
*/


// express js - создан для более быстрого и легкого написания серверных скриптов
const express = require('express'); // подключаем библиотеку express
const app = express();

app.use(express.static('../lesson_7'));
// app.use(express.static(`${__dirname}/lesson_7/index.html`));

app.get('/data', (req, res) => {
    console.log('data');
    res.send('data');
})
// подключаем сервер
app.listen(3000, () => {
    console.log('server runnig on local:3000');
})
