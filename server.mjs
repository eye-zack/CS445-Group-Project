// server.mjs

import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3001;

app.use(express.json());

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    const apiKey ='upec58L5V3NVxiQftPEUpYlv9EhIJ5Lf';
    const apiUrl = 'https://api.pirateweather.net/forecast/${apiKey}/${city}';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.log('Error fetching weather data:', error);
        res.status(500).json({ error: 'Error fetching weather data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});