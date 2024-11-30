const express = require('express');
const cors = require('cors');
const path = require('path');
const LampData = require('./components/LampData/LampData.js'); // ваші дані для ліхтарів

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Налаштовуємо обробку статичних файлів із папки 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Ваш API маршрут для ліхтарів
app.get('/api/lamps', (req, res) => {
    const { searchTerm, sort, idOption, price } = req.query;

    let filteredLamps = LampData;

    if (searchTerm) {
        filteredLamps = filteredLamps.filter(lamp =>
            lamp.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    if (sort) {
        if (sort === 'sortByPrice') {
            filteredLamps.sort((a, b) => a.price - b.price);
        } else if (sort === 'sortByTitle') {
            filteredLamps.sort((a, b) => a.title.localeCompare(b.title));
        }
    }

    if (idOption) {
        if (idOption === '1') {
            filteredLamps = filteredLamps.filter(lamp => lamp.id < 2);
        } else if (idOption === '2') {
            filteredLamps = filteredLamps.filter(lamp => lamp.id >= 3 && lamp.id <= 4);
        }
    }

    if (price) {
        const [minPrice, maxPrice] = price.split('-').map(Number);
        filteredLamps = filteredLamps.filter(lamp => {
            const lampPrice = parseInt(lamp.price, 10);
            return lampPrice >= minPrice && (maxPrice ? lampPrice <= maxPrice : true);
        });
    }

    res.json(filteredLamps);
});

// Виправлений маршрут для SPA
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Додаємо маршрут для SPA, щоб всі запити перенаправлялись на index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
