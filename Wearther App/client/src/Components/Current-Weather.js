// Importing stylesheet for current weather component
import "./Current-Weather.css";

// This is a functional component to display the current weather and clothing recommendations
const CurrentWeather = ({ data }) => {
  // Utility function to determine clothing based on temperature
  const getClothingRecommendation = (temperature) => {
    if (temperature >= 75) {
      return { top: 'T-Shirt', bottom: 'Shorts' };
    } else if (temperature >= 60) {
      return { top: 'Light Jacket', bottom: 'Jeans' };
    } else {
      return { top: 'Coat', bottom: 'Pants' };
    }
  };

  // Calculate clothing based on the current temperature
  const clothing = getClothingRecommendation(data.temperature);

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>  {/* Display city name */}
          <p className="weather-description">{data.weather[0].description}</p>  {/* Weather description */}
        </div>
        <img
          alt="weather icon"
          className="weather-icon"
          src={`WeatherIcons/${data.weather[0].icon}.png`}  // Display weather icon
        />
        <img
          alt="clothing top icon"
          className="clothing-top-icon"
          src={`ClothingTopIcons/${clothing.top}.svg`}  // Display recommended top clothing icon
        />
        <img
          alt="clothing bottom icon"
          className="clothing-bottom-icon"
          src={`ClothingBottomIcons/${clothing.bottom}.svg`}  // Display recommended bottom clothing icon
        />
      </div>
      <div className="bottom">
        <p className="temperature">{data.temperature}°F</p>  {/* Display current temperature */}
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{data.feels_like}°F</span>  {/* Display feels-like temperature */}
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind} MPH</span>  {/* Display wind speed */}
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.humidity}%</span>  {/* Display humidity level */}
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.pressure} inHg</span>  {/* Display atmospheric pressure */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
