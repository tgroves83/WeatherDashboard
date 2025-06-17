import React, { useState } from 'react';
import mockWeatherData from '../data/mockWeatherData';
function WeatherDashboard() {
    type Forecast = {
        date: string;
        temperatureC: number;
        temperatureF: number;
        summary: string;
    };
    const [forecast, setForecast] = useState<Forecast | null>(null);
    const [statusMessage, setStatusMessage] = useState(null);

    const handleClick = () => {
        setStatusMessage('Fetching most recent data...');
        setTimeout(() => {
            const randomItem = mockWeatherData[Math.floor(Math.random() * mockWeatherData.length)];
            setForecast(randomItem);
            setStatusMessage(null);
        }, 1000);
    };

    return (
        <div style={{ padding: '1rem' }}>
            <h1>Weather Dashboard</h1>
            <button onClick={handleClick}>Fetch Forecast</button>

            {statusMessage && <p>{statusMessage}</p>}

            {forecast && (
                <div style={{ marginTop: '1rem' }}>
                    <p><strong>Date:</strong> {forecast.date}</p>
                    <p><strong>Temperature:</strong> {forecast.temperatureC}°C / {forecast.temperatureF}°F</p>
                    <p><strong>Summary:</strong> {forecast.summary}</p>
                </div>
            )}
        </div>
    );
}

export default WeatherDashboard;