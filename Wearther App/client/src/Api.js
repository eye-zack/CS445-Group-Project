// geoDB
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "081122d77bmshd5d055001f6f845p127ec8jsnc2ed600bad20",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

// pirateweather
export const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5`;
export const WEATHER_API_KEY = "ee6a756da9475441fbb2024c39b70921"; // put api key here

// GeoLocation
const url = "https://ip-geo-location4.p.rapidapi.com/?format=json";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "081122d77bmshd5d055001f6f845p127ec8jsnc2ed600bad20",
    "X-RapidAPI-Host": "ip-geo-location4.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
