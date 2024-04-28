// WeatherApp.jsx

import React, { useState } from 'react';
import './App.css';

function CurrentWeather() {
    const [cityInput, setCityInput] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const getWeather = async () => {
        try {
            const response = await fetch(`/weather?city=${cityInput}`);
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.log('Error fetching weather data:', error);
        }
    };

    return (
        <div className="container">
            <h1>Weather App</h1>
            <div className="weather-info">
                <input 
                    type="text" 
                    value={cityInput} 
                    onChange={(e) => setCityInput(e.target.value)} 
                    placeholder="Enter City Name" 
                />
                <button onClick={getWeather}>Get Weather</button>
                {weatherData && (
                    <div id="weatherResult">
                        <h2>{weatherData.name}, {weatherData.sys.country}</h2>
                        <p>Temperature: {weatherData.main.temp}°C</p>
                        <p>Description: {weatherData.weather[0].description}</p>
                        <p>Humidity: {weatherData.main.humidity}%</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CurrentWeather;