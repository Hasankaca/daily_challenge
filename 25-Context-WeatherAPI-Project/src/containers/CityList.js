import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const CityList = () => {
  const { cities, deleteCity } = useContext(WeatherContext);

  return (
    <table className="city-list">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        {cities.map((city) => (
          <tr key={city.id}>
            <td>{city.name}</td>
            <td>{city.temperature}</td>
            <td>
              <button className="input" onClick={(e) => deleteCity(city.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CityList;