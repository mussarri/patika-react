import React, { useEffect, useState } from "react";
import { useLocation } from "./context/LocationContext";

export default function WeatherPart() {
  const [data, setData] = useState({});
  const { location } = useLocation();

  useEffect(() => {
    const API = "e158983a9e5b4374abf85673d93c4614";
    let url = `https://api.weatherbit.io/v2.0/current?&key=${API}&include=daily`;
    if (typeof location == "string") url = url + `&city=${location}&country=TR`;
    else if (typeof location == "object")
      url = url + `&lat=${location[0]}&lon=${location[1]}`;
    fetch(url)
      .then((results) => results.json())
      .then((data) => setData(data.data[0]));
  }, [location]);

 
  
  const returnUI = () => 
    <div id="weather_wrapper">
      <div className="weatherCard">
        <div className="currentTemp">
          <span className="temp">{data.temp.toFixed(0)}&deg;</span>
          <span className="location">{data.city_name}</span>
        </div>
        <div className="currentWeather">
          <img src={`https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`} alt="icon" />
          <div className="info">
            <span className="rain">{data.rh}%</span>
            <span className="wind">{data.wind_spd.toFixed(1)}m/s</span>
            <span
              className="wind_dir"
              style={{ transform: `rotate(${data.wind_dir}deg)` }}
            >
              &#x21E7;
            </span>
          </div>
        </div>
      </div>
    </div>
  ;

  const returnEmpty = () => <div style={{fontSize:`40px`, textAlign: `center`, color: "#fff" }}>Loading</div>;
  const select = () => <div style={{fontSize:`40px`, textAlign: `center`, color: "#fff" }}>Please Select City</div>;

  return <div>{data.temp ? returnUI() : location === undefined ? select() : returnEmpty()}</div>;
}
