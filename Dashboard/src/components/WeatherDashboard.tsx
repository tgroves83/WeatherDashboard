import React, { useState } from 'react';
import { MainWrapper } from './weather.module.ts';
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import axios from "axios";
import IconChanger from "./IconChanger.tsx";
//import Card  from './Card.tsx';

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
};

const WeatherDashboard: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    
   
  
    const handleClick = async () => {
        setStatusMessage("Fetching most recent data...");
        setIsLoading(true);
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=9.313215&lon=-79.792150&appid=928fe72d86f08c9e670ed1f0ae5ed6e7&units=metric`;
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
        <MainWrapper>
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
                
                <div className="weatherArea">
                    {isLoading ? (
                        <p>Loading weather data...</p>
                        ) : weatherData ? (
                            <>
                                <div className="icon">
                                    <IconChanger weather={weatherData.weather[0].main}/>
                                </div>
                                <div>
                                    <p><strong>Temperature:</strong> {weatherData.main.temp}°C </p>
                                    <p><strong>Summary:</strong> {weatherData.weather[0].main}</p>
                                </div>

                        
                                <div className="bottomInfoArea">
                                    <div className="humidityLevel">
                                        <WiHumidity className="windIcon"/>
                                        <div className="humidIcon">
                                            <h2>{weatherData.main.humidity}%</h2>
                                            <p>Humidity</p>
                                        </div>
                                    </div>
                                    <div className="wind">
                                        <FiWind className="windIcon"/>
                                        <div className="humidIcon">
                                            <h2>{weatherData.wind.speed} km/h</h2>
                                            <p>Wind Speed</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <p>Click the button to fetch weather data</p>
                        )}
                </div>
            </div>
        </MainWrapper>
    );
}

export default WeatherDashboard;


