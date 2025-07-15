import React from 'react';
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import IconChanger from "./IconChanger.tsx";
import styles from './WeatherArea.module.css';

export interface WeatherDisplayProps {
    temp: number;
    summary: string;
    humidity: number;
    windSpeed: number;
}

const WeatherArea: React.FC<WeatherDisplayProps> = ({
    temp,
    summary,
    humidity,
    windSpeed
}) => (
    <div className={styles.weatherArea}>
        <div className={styles.icon}>
            <IconChanger weather={summary} />
        </div>

        <div className={styles.summaryArea}>
            <h3><strong>Temperature:</strong> {Math.round(temp)}°C</h3>
            <h3><strong>Summary:</strong> {summary}</h3>
        </div>

        <div className={styles.bottomInfoArea}>
            <div className={styles.humidityLevel}>
                <WiHumidity className={styles.windIcon}/>
                <div className={styles.humidIcon}>
                    <h2>{Math.round(humidity)}%</h2>
                    <p>Humidity</p>
                </div>
            </div>
            <div className={styles.wind}>
                <FiWind className={styles.windIcon}/>
                <div className={styles.humidIcon}>
                    <h2>{Math.round(windSpeed)} km/h</h2>
                    <p>Wind Speed</p>
                </div>
            </div>
        </div>
    </div>
);

export default WeatherArea;

