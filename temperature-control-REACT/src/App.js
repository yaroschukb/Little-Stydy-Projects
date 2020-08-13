import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState('neutral');

  const increaseTemperature = () => {
    
    const newTemperature = temperatureValue + 1;
    setTemperatureValue(newTemperature)

    if (newTemperature >= 15) {
      setTemperatureColor('hot');
    }
    if (newTemperature < 15) {
      setTemperatureColor('neutral');
    }
    if (newTemperature>=31){
       return setTemperatureValue(temperatureValue)
       
    }
  };

  const decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1;
    setTemperatureValue(newTemperature);
    if (newTemperature <= 10) {
      setTemperatureColor('cold');
    }
    if (newTemperature >= 10) {
      setTemperatureColor('neutral');
    }

    if (newTemperature<=-31){
      return setTemperatureValue(temperatureValue)
    }
  };

  return (
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>
      <div className='button-container'>
        <button onClick={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </div>
  );
};

export default App;


