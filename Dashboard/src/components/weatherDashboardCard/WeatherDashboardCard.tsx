import React, { useState } from 'react';
import Card from './Card.tsx';
import axios from "axios";
import WeatherArea from "./WeatherArea.tsx";
import { fetchCurrentWeather } from "@myorg/service-client";
import type { WeatherData } from "@myorg/service-client";


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
            const data = await fetchCurrentWeather();
            
            console.log('Weather data:', data);
            setWeatherData(data);
            setStatusMessage(null);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setStatusMessage("Error fetching weather data");
        } finally {
            setIsLoading(false);
        }
    };

    const handleClick2 = async () => {
        setStatusMessage("Fetching most recent data...");
        setIsLoading(true);

        //1. Create a Service Client / Wrapper for FarmWeatherSys.Api (new project)
        //      - "Create a React Service Client for my REST API"
        //      - "GET http://localhost:5019/weatherforecast/GetWeatherForecast"
        //      - This should return JSON data, which is transformed into a React object through the Service Client.
        //2. Implement API methods as async calls (returning promises)
        //3. Use promise or promise chain to get data from Service Client.

        /*serviceClient.GetWeatherDataAsync()
            .promise
                .then(...)
                .catch(error ...)
                .finally(...)
*/
        try {
            const url = `http://localhost:8000`;
            console.log('Making request to:', url);

            const response = await axios.get(url);
            console.log('Response received:', response);
            console.log('Weather data:', response.data);

            if (!response.data) {
                throw new Error('No data received from server');
            }

            // Validate the received data structure
            if (!response.data.main || !response.data.weather || !response.data.wind) {
                throw new Error('Invalid data structure received');
            }
            setWeatherData(response.data);
            setStatusMessage(null);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setStatusMessage("Error fetching weather data");
        } finally {
            setIsLoading(false);
        }
    };

    // Add debug output
    console.log('Current weatherData state:', weatherData);
    console.log('Current isLoading state:', isLoading);


    return (
        <Card title={"Five Star Farm Weather"}>
            <>
            <div>
                <div className="getArea">
                       
                    <div className="getButton">
                        <button onClick={handleClick} disabled={isLoading}>
                            {isLoading ? 'Fetching...' : 'Fetch Farm Weather'}
                        </button>
                        <button onClick={handleClick2} disabled={isLoading}>
                            {isLoading ? 'Fetching...' : 'Fetch Colon Weather'}
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


