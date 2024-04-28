function getWeather() {
    var cityInput = document.getElementById('cityInput').value;
    var apiKey = 'upec58L5V3NVxiQftPEUpYlv9EhIJ5Lf'; // API key from openweathermap.com
    var apiUrl = 'https://api.pirateweather.net/forecast/${apiKey}/${city}';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
        });
}


function displayWeather(data) {
    var weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Description: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}