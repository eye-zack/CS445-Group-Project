import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../Api";
import "./Search.css";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    const response = await fetch(
      `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`, // fetches the city name, minPopulation is optional
      geoApiOptions
    );
    const response_1 = await response.json();
    return {
      options: response_1.data.map((city) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        };
      }),
    };
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <div className="search-container">
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        styles={{
          // would not respond to .css file as a result of AsyncPaginate, so the style is declared here
          container: (provided) => ({
            ...provided,
            width: "500px",
            margin: "20px auto 0 auto",
          }),
          control: (provided) => ({
            ...provided,
            height: "40px",
          }),
        }}
      />
    </div>
  );
};

export default Search;
