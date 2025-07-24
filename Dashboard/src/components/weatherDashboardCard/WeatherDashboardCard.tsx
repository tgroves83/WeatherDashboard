import React, { useState } from 'react';
import Card from './Card.tsx';
import WeatherArea from "./WeatherArea.tsx";
import { serviceClient } from "@myorg/service-client";
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
      
    const fetchFarmWeather = async () => {
        setStatusMessage("Fetching farm`s most recent data...");
        setIsLoading(true);
        
        const client = serviceClient();
        
        await client.fetchCurrentWeather()
            .then((data: WeatherData) => {
                console.log('Farm Weather data:', data);
                setWeatherData(data);
                setStatusMessage(null);
            })
            .catch((error: any) => {
                console.error('Error fetching farm weather data:', error);
                setStatusMessage("Error fetching farm weather data");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const fetchColonWeather = async () => {
        setStatusMessage("Fetching weather tower's most recent data...");
        setIsLoading(true);

        const client = serviceClient();

        await client.fetchOpenWeather()
            .then((data: WeatherData) => {
                console.log('Tower Weather data:', data);
                setWeatherData(data);
                setStatusMessage(null);
            })
            .catch((error: any) => {
                console.error('Error fetching tower weather data:', error);
                setStatusMessage("Error fetching tower weather data");
            })
            .finally(() => {
                setIsLoading(false);
            });
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
                        <button onClick={fetchFarmWeather} disabled={isLoading}>
                            {isLoading ? 'Fetching...' : 'Fetch Farm Weather'}
                        </button>
                        <button onClick={fetchColonWeather} disabled={isLoading}>
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


