import React, { useState } from 'react';
import mockWeatherData from '../data/mockWeatherData';
import { MainWrapper } from './weather.module.ts';
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import { BsFillSunFill, BsCloudyFill, BsFillCloudRainFill, BsCloudFogFill } from "react-icons/bs";
import { RiLoaderFill } from "react-icons/ri";
import { TiWeatherPartlySunny } from "react-icons/ti";

function WeatherDashboard() {
    type Forecast = {
        date: string;
        temperatureC: number;
        temperatureF: number;
        summary: string;
    };
    const [forecast, setForecast] = React.useState<Forecast | null>(null);
    const [statusMessage, setStatusMessage] = useState(null);
    
    
    

    const handleClick = () => {
        setStatusMessage("Fetching most recent data...");
        setTimeout(() => {
            const randomItem = mockWeatherData[Math.floor(Math.random() * mockWeatherData.length)];
            setForecast(randomItem);
            setStatusMessage(null);
        }, 1000);
    };

    return (
        <MainWrapper>
            <div className="container">
                <h1>Five Star Farm Weather</h1>
                <div className="getArea">
                       
                    <div className="getButton">
                        <button onClick={handleClick}>Fetch Forecast</button>
                        {statusMessage && <p><strong>{statusMessage}</strong></p>}
                    </div>
                </div>
                <div className="weatherArea">
                    <div className="icon">
                        Icon
                    </div>
                        {forecast && (
                        <div>
                            <p><strong>Temperature:</strong> {forecast.temperatureC}°C / {forecast.temperatureF}°F</p>
                            <p><strong>Summary:</strong> {forecast.summary}</p>
                        </div>
                        )}
                </div>
                <div className="bottomInfoArea">
                    <div className="humidityLevel">
                        <WiHumidity className="windIcon"/>
                        <div className="humidIcon">
                            <h2>60%</h2>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className="wind">
                        <FiWind className="windIcon"/>
                        <div className="humidIcon">
                            <h2>2.35km/h</h2>
                            <p>Wind Speed</p>
                        </div>    
                    </div>
                </div>
                {forecast && (
                    <div >
                        <p><strong>Date: </strong>{forecast.date}</p>
                    </div>
                )}
            </div>
        </MainWrapper>
    );
}

export default WeatherDashboard;