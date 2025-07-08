const PORT = 8000

import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express()
app.use(cors());


app.get('/', async (req, res) => {
    try {
        const apiKey = process.env.VITE_OPENWEATHER_KEY;

        if (apiKey) {
            const response = await axios({
                method: 'GET',
                url: 'https://api.openweathermap.org/data/2.5/weather',
                params: {
                    lat: 9.313215,
                    lon: -79.792150,
                    units: 'metric',
                    appid: apiKey
                }
            });
            res.json(response.data);
        } else {
            throw new Error('API key not found in environment variables');
        }
    } catch (error) {
            console.error('Error:', error.message);
            res.status(500).json({
                error: 'Failed to fetch weather data',
                message: error.message
            });
    }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


