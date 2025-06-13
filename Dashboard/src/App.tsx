import { useState } from 'react'
import './App.css'
import WelcomeMessage from "./components/WelcomeMessage.tsx";
import TemperatureC from "./components/TemperatureC.tsx";
import TodaysDate from "./components/TodaysDate.tsx";
import TemperatureF from "./components/TemperatureF.tsx";
import Summary from "./components/Summary.tsx";
import ListGroup from "./components/ListGroup.tsx";

function App() {

  return (
    <>
      <WelcomeMessage />
      <TodaysDate />
      <TemperatureC />
      <TemperatureF />
        <Summary />
        <ListGroup />
    </>
  )
}

export default App
