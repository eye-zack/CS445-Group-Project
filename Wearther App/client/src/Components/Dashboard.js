import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Search from "./Search";
import CurrentWeather from "./Current-Weather";

function Dashboard() {
  const [userLocation, setUserLocation] = useState(null);

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

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
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather userLocation={userLocation} />
    </div>
  );
}

export default Dashboard;
