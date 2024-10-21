const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

let lamps = [
    { id: 1, type: 'LED', power: 10, leds: 20, manufacturer: 'Philips' },
    { id: 2, type: 'CFL', power: 15, leds: 15, manufacturer: 'Osram' },
    { id: 3, type: 'Incandescent', power: 60, leds: 10, manufacturer: 'GE' },
];

app.get('/lamps', (req, res) => {
    res.json(lamps);
});

app.get('/lamps/search', (req, res) => {
    const { term } = req.query;
    const searchTerm = term ? term.toLowerCase() : '';
    const filteredLamps = lamps.filter(lamp =>
        lamp.type.toLowerCase().includes(searchTerm)
    );
    res.json(filteredLamps);
});

app.get('/lamps/sort/power', (req, res) => {
    const { term } = req.query;
    let filteredLamps = lamps;

    if (term) {
        const searchTerm = term.toLowerCase();
        filteredLamps = lamps.filter(lamp =>
            lamp.type.toLowerCase().includes(searchTerm)
        );
    }

    const sortedLamps = [...filteredLamps].sort((a, b) => a.power - b.power);
    res.json(sortedLamps);
});

app.get('/lamps/sort/leds', (req, res) => {
    const { term } = req.query;
    let filteredLamps = lamps;

    if (term) {
        const searchTerm = term.toLowerCase();
        filteredLamps = lamps.filter(lamp =>
            lamp.type.toLowerCase().includes(searchTerm)
        );
    }

    const sortedLamps = [...filteredLamps].sort((a, b) => a.leds - b.leds);
    res.json(sortedLamps);
});

app.get('/lamps/count-leds', (req, res) => {
    const { term } = req.query;
    let filteredLamps = lamps;

    if (term) {
        const searchTerm = term.toLowerCase();
        filteredLamps = lamps.filter(lamp =>
            lamp.type.toLowerCase().includes(searchTerm)
        );
    }

    const totalLeds = filteredLamps.reduce((total, lamp) => total + lamp.leds, 0);
    res.json({ totalLeds });
});

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
    res.status(201).json(newLamp);
});

app.put('/lamps/:id', (req, res) => {
    const lampId = parseInt(req.params.id);
    const { type, power, leds, manufacturer } = req.body;

    const lampIndex = lamps.findIndex(lamp => lamp.id === lampId);
    if (lampIndex >= 0) {
        lamps[lampIndex] = { id: lampId, type, power, leds, manufacturer };
        res.json(lamps[lampIndex]);
    } else {
        res.status(404).json({ message: 'Lamp not found' });
    }
});

app.delete('/lamps/:id', (req, res) => {
    const lampId = parseInt(req.params.id);
    const initialLength = lamps.length;
    lamps = lamps.filter(lamp => lamp.id !== lampId);

    if (lamps.length < initialLength) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Lamp not found' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
