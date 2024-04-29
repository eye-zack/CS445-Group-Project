import "./Current-Weather.css";

const CurrentWeather = ({data}) => {
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
        <p className="temperature">75°F</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">78°F</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">15 MPH</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">71%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">30.00 inHg</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
