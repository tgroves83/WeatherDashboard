import { useState } from 'react';
import './App.css'
import WeatherDashboard from "./components/WeatherDashboard.tsx";
import './index.css';

function App() {

  return (
    <>
        <div className="dashboard-container">
            <WeatherDashboard />
        </div>
    </>
  )
}



export default App
