import React from 'react';
import {useWeather} from '../context/Weather'
const Input = (props) => {
    const weather = useWeather();
    
    return (
        <input
         type="text" 
         className='input-field'
         placeholder='Search here'
         value= {weather.searcCity}
         onChange={(e) => weather.setSearchCity(e.target.value)}
         />
    );
};
export default Input;