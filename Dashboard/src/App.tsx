import WeatherDashboardCard from "./components/weatherDashboardCard/WeatherDashboardCard.tsx";
import './index.css';
import Card from "./components/weatherDashboardCard/Card";

function App() {

  return (
    <>
        <div className={'zebra'}>
            <Card title={'CardCreatedWColin'} children={undefined}/>
            <WeatherDashboardCard />
        </div>
    </>
  )
}



export default App
