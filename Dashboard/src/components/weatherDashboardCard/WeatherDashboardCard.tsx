import React, { useState } from 'react';
import Card from './Card.tsx';
import axios from "axios";
import WeatherArea from "./WeatherArea.tsx";


interface WeatherDataProps {
    main: {
        temp: number;
        humidity: number;
    };
    weather: {
        main: string;
    }[];
    wind: {
        speed: number;
    }
}

const WeatherDashboardCard: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
      
    const handleClick = async () => {
        setStatusMessage("Fetching most recent data...");
        setIsLoading(true);
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=9.313215&lon=-79.792150&appid=&units=metric`;
            const response = await axios.get(url);
            setWeatherData(response.data);
            setStatusMessage(null);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setStatusMessage("Error fetching weather data");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card>
            <>
            <div className="container">
                <h1>Five Star Farm Weather</h1>
                <div className="getArea">
                       
                    <div className="getButton">
                        <button onClick={handleClick} disabled={isLoading}>
                            {isLoading ? 'Fetching...' : 'Fetch Current Weather'}
                        </button>
                        {statusMessage && <p><strong>{statusMessage}</strong></p>}
                    </div>
                </div>
                {isLoading && <p>Loading weather data…</p>}
                
                    {!isLoading && weatherData && (
                       
                        <WeatherArea 
                            temp={weatherData.main.temp}
                            summary={weatherData.weather[0].main}
                            humidity={weatherData.main.humidity}
                            windSpeed={weatherData.wind.speed} 
                        />
                    )}
                {!isLoading && !weatherData && <p>Click the button to fetch weather data.</p>}
                
            </div>
            </>
        </Card>
    );
}


export default WeatherDashboardCard;


