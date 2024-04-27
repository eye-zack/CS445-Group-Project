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
    </div>
  );
};

export default CurrentWeather;
