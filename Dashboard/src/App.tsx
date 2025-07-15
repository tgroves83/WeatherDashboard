import WeatherDashboardCard from "./components/weatherDashboardCard/WeatherDashboardCard.tsx";
import './index.css';
import styles from './App.module.css';

function App() {

  return (
    <>
        <div className={styles.container}>
            <WeatherDashboardCard />
        </div>
    </>
  )
}



export default App
