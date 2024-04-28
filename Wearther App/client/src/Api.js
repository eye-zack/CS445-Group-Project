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
export const WEATHER_API_URL = "https://api.pirateweather.net/forecast/";
export const WEATHER_API_KEY = "upec58L5V3NVxiQftPEUpYlv9EhIJ5Lf"; // put api key here

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
