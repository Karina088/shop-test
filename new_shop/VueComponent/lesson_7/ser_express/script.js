const express = require('express');
const app = express(); // app - объект с помощью которого можно обрабатывать запросы на сервер
app.listen(3000, () => {
    console.log('Связь с сервером установлена!');
});

app.get('/', (req, res) => {
    // установила модуль nodemon с флагом -g(global) - работает
    // nodemon - автоматически перезапускает сервер
    res.send('<h1>Ответ от сервера))</h1>');
});