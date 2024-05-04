import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Search from "./Search";
import CurrentWeather from "./Current-Weather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../Api";

function getBackgroundClass(weatherData) {
  const hour = new Date().getHours();
  const isNight = hour < 6 || hour > 18;

  // Check for clear conditions and differentiate between day and night
  if (weatherData.main === 'Clear') {
    return isNight ? 'clear-night' : 'clear-sky'; 
  } else if (weatherData.main === 'Clouds') {
    // Handle cloudy conditions and differentiate based on description
    if (weatherData.description.includes('few clouds')) {
      return isNight ? 'few-clouds-night' : 'partly-cloudy'; 
    } else if (weatherData.description.includes('broken clouds')) {
      return isNight ? 'broken-clouds-night' : 'broken-clouds';
    } else {
      return isNight ? 'cloudy-night' : 'cloudy';
    }
  } else if (weatherData.main === 'Rain' || weatherData.main === 'Thunderstorm') {
    return 'rainy';
  } else if (weatherData.main === 'Snow') {
    return 'snowy';
  } else {
    // Default for any other unhandled weather conditions
    return '';
  }
}

function Dashboard() {
  const [userLocation, setUserLocation] = useState(null);
  // const [defaultWeather, setDefaultWeather] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [locationError, setLocationError] = useState('');

  const backgroundClass = currentWeather ? getBackgroundClass(currentWeather.weather[0]) : '';

  const handleOnSearchChange = (searchData) => {
    setLocationError('');

    //const [defaultLatitude, defaultLongitude] = userLocation.split(" ");
    const [latitude, longitude] = searchData.value.split(" ");

    /*
    const defaultWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${defaultLatitude}&lon=${defaultLongitude}&appid=${WEATHER_API_KEY}&units=imperial`
    )
    */
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=imperial`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=imperial`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        //const defaultResponse = await response[0].json();
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();
        
        // if the weather fetch was successful, clear the location error message 
        setLocationError('');
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(error => {
        console.log(error);
        // if the weather fetch fails, update the location error message. 
        setLocationError("Failed to fetch weather data. Please try again.")
      });
  };

  console.log(currentWeather);
  console.log(forecast);

  // successfully fetches the user's location if the request is accepted, but it isn't implemented yet
  useEffect(() => {
    // check if the Geolocation API is supported
    if (navigator.geolocation) {
      // request user's location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocationError("We're unable to retrieve your location. Please check if location services are blocked.");
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className={`dashboard-container ${backgroundClass}`}>
      <Search onSearchChange={handleOnSearchChange} /> 
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default Dashboard;
