const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 5000;

// Додаємо підтримку CORS та парсинг JSON
app.use(cors());
app.use(bodyParser.json());

// Підключаємо статичні файли з папки 'public'
app.use(express.static(path.join(__dirname, 'public')));

let lamps = [
    { id: 1, type: 'LED', power: 10, leds: 20, manufacturer: 'Philips' },
    { id: 2, type: 'CFL', power: 15, leds: 15, manufacturer: 'Osram' },
    { id: 3, type: 'Incandescent', power: 60, leds: 10, manufacturer: 'GE' },
];

// Роут для отримання списку ламп
app.get('/lamps', (req, res) => {
    res.json(lamps);
});

// Роут для додавання нової лампи
app.post('/lamps', (req, res) => {
    const { type, power, leds, manufacturer } = req.body;
    const newLamp = {
        id: lamps.length + 1,
        type,
        power,
        leds,
        manufacturer,
    };
    lamps.push(newLamp);
    res.status(201).json(newLamp);  // Статус 201 для успішного створення
});

// Роут для оновлення інформації про лампу
app.put('/lamps/:id', (req, res) => {
    const lampId = parseInt(req.params.id);
    const { type, power, leds, manufacturer } = req.body;

    const lampIndex = lamps.findIndex(lamp => lamp.id === lampId);
    if (lampIndex >= 0) {
        lamps[lampIndex] = { id: lampId, type, power, leds, manufacturer };
        res.json(lamps[lampIndex]);
    } else {
        res.status(404).json({ message: 'Lamp not found' });  // Повідомлення про помилку
    }
});

// Роут для видалення лампи
app.delete('/lamps/:id', (req, res) => {
    const lampId = parseInt(req.params.id);
    const initialLength = lamps.length;
    lamps = lamps.filter(lamp => lamp.id !== lampId);

    if (lamps.length < initialLength) {
        res.status(204).send();  // Успішне видалення
    } else {
        res.status(404).json({ message: 'Lamp not found' });  // Повідомлення про помилку
    }
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
