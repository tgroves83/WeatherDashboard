import React from "react";
import { 
    BsFillSunFill, 
    BsCloudyFill, 
    BsFillCloudRainFill, 
    BsCloudFogFill } from "react-icons/bs";
import { TiWeatherPartlySunny } from "react-icons/ti";


interface IconChangerProps {
    weather: string;
}

export default function IconChanger({weather}:IconChangerProps) {
    let iconElement: React.ReactNode;
    let iconColour: string;
    
    switch(weather) {
        case "Rain":
            iconElement = <BsFillCloudRainFill/>;
            iconColour="#272829";
            break;
            
        case "Clear":
            iconElement = <BsFillSunFill/>;
            iconColour="#FFC436";
            break;
            
        case "Clouds":
            iconElement = <BsCloudyFill/>;
            iconColour="#102C57";
            break;
                
        case "Mist":
            iconElement = <BsCloudFogFill/>;
            iconColour="#279EFF";
            break;
            
        default:
            iconElement = <TiWeatherPartlySunny/>;
            iconColour="#702869";
            
    }
    return (
        <span className="icon" style={{color: iconColour}}>
            {iconElement}
        </span>
    )
    
}
