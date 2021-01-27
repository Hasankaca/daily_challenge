import React, { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";

const AddCityButton = () => {
  const { addCity } = useContext(WeatherContext);

  const [name, setName] = useState('');

  const handleData = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };

   const submitCity = async (e) => {
    e.preventDefault();

    const apiKey = "2082573baa2c88e4ee84edd0044c8192";
    const forecastUrl = "http://api.weatherstack.com/current?access_key=";
    const urlToFetch = forecastUrl + apiKey + "&query=" + name;

    try {
      const response = await fetch(urlToFetch);
      if (response.ok) {
        const jsonResponse = await response.json();
        // console.log(jsonResponse);
        addCity(name, jsonResponse.current.temperature);
      } else {
        throw new Error("Request Failed!");
      }
    } catch (err) {
      console.log(err);
    }
    setName("");
  };

  return (
    <div className="add-city-form">
      <form action="" onSubmit={submitCity} className="add-city-form">
        <input
          onChange={handleData}
          className="input"
          value={name}
          required
          placeholder="Cities"
        />
        <button className="input">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCityButton;
