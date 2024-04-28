import "./Current-Weather.css";
const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Cape Girardeau</p>
          <p className="weather-description">Sunny</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src="WeatherIcons/clear-day.svg"
        ></img>
      </div>
      <div className="bottom">
        <p className="temperature">75°F</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
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
