import React, { useState } from 'react';
import mockWeatherData from '../data/mockWeatherData'; //take out this
import { MainWrapper } from './weather.module.ts';
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import { BsFillSunFill, BsCloudyFill, BsFillCloudRainFill, BsCloudFogFill } from "react-icons/bs";
import { RiLoaderFill } from "react-icons/ri";
import { TiWeatherPartlySunny } from "react-icons/ti";
import axios from "axios";
import Card  from './Card.tsx';

type Forecast = {
    date: string;
    
    //get rid of these after fetching portion is done
    temperatureC: number;
    temperatureF: number;
    summary: string;
};

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
    const [forecast, setForecast] = React.useState<Forecast | null>(null);
    const [statusMessage, setStatusMessage] = useState(null);
    const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
    
    //const api_key = "928fe72d86f08c9e670ed1f0ae5ed6e7";
    //const api_Endpoint = "https://api.openweathermap.org/data/2.5/";

    const fetchCurrentWeather = async () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=9.313215&lon=-79.792150&appid=928fe72d86f08c9e670ed1f0ae5ed6e7&units=metric`;
        const response = await axios.get(url);
        return response.data;
    }


    React.useEffect(()=> {
        Promise.all([fetchCurrentWeather()]).then(
            ([currentWeather]) => {
                console.log(currentWeather)
                setWeatherData(currentWeather);
            }
        )
    }, []);
  
    const handleClick = () => {
        setStatusMessage("Fetching most recent data...");
        setTimeout(() => {
            const randomItem = mockWeatherData[Math.floor(Math.random() * mockWeatherData.length)];
            setForecast(randomItem);
            setStatusMessage(null);
        }, 1000);
    };

    return (
        <Card>
            <div className="container">
                <h1>Five Star Farm Weather</h1>
                <div className="getArea">
                       
                    <div className="getButton">
                        <button onClick={handleClick}>Fetch Current Weather</button>
                        {statusMessage && <p><strong>{statusMessage}</strong></p>}
                    </div>
                </div>
                {forecast && (
                    <>
                        <div className="weatherArea">
                            <div className="icon">
                                Icon
                            </div>
                            <div>
                                <p><strong>Temperature:</strong> {forecast.temperatureC}°C / {forecast.temperatureF}°F</p>
                                <p><strong>Summary:</strong> {forecast.summary}</p>
                            </div>
                        
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
                        <div >
                            <p><strong>Date: </strong>{forecast.date}</p>
                        </div>
                    </>
                )}
            </div>
        </Card>
    );
}

export default WeatherDashboard;


