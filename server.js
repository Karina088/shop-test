'use strict';

// express js - создан для более быстрого и легкого написания серверных скриптов
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const fs = require('fs');

app.use(express.static('.'));
app.use(bodyParser.json());
// app.use(bodyParser.json({ extended: true }));
// app.use(express.static('.'));

app.get('/catalog', (req, res) => {
    fs.readFile('./catalog.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.post('/addToCart', (req, res) => {
    fs.readFile('./cart.json', 'utf8', (err, data) => {
        if (err) {
            res.send('{"result": 0}');
        } else {
            const cart = JSON.parse(data);
            const item = req.body;

            cart.push(item);

            fs.writeFile('./cart.json', JSON.stringify(cart), (err) => {
                if (err) {
                    res.send('{"result": 0}');
                } else {
                    res.send('{"result": 1}');
                }
            });
        }
    });
});

// подключаем сервер
app.listen(3000, () => {
    console.log('server running on local:3000');
});