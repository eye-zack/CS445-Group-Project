import "./Current-Weather.css";

const CurrentWeather = ({ data }) => {
  if (!data || !data.weather || data.weather.length === 0) {
    // Handle the case where the data is not yet loaded
    return <div>Loading...</div>;
  }

  let animationClass = '';

  switch (data.weather[0].main) {
    case 'Clouds':
      animationClass = 'weather-icon-partly-cloudy';
      break;
    case 'Clear':
      animationClass = 'weather-icon-sunny';
      break;
    // default case to handle unexpected weather conditions
    default:
      animationClass = '';
      break;
  }

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className={`weather-icon ${animationClass}`}
          src={`WeatherIcons/${data.weather[0].icon}.png`}
        ></img>
        <div>
          <p className="clothing-description">
            Clothing Reccomendations for {data.weather[0].description} weather:{" "}
          </p>
        </div>
        <img
          alt="weather"
          className="clothing-top-icon"
          src={`ClothingTopIcons/${data.weather[0].icon}.svg`}
        ></img>
        <img
          alt="weather"
          className="clothing-bottom-icon"
          src={`ClothingBottomIcons/${data.weather[0].icon}.svg`}
        ></img>
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°F</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°F
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} MPH</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} inHg</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
