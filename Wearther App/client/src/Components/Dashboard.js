import React from 'react';
import "./Dashboard";
import Search from "./Search";
import CurrentWeather from "./Current-Weather";

function Dashboard() {
    
    const handleOnSearchChange = (searchData) => {
        console.log(searchData);
    }
    
    return (
        <div>
            <Search onSearchChange={handleOnSearchChange} />
            <CurrentWeather />
        </div>
    );
} 
export default Dashboard;