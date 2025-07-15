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


