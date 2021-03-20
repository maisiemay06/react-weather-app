import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="row">
      <div className="col-6">
        <h2 className="city" id="city-name">
          Manchester
        </h2>
        <h4 className="current-weather" id="weather-description">
          Currently Cloudy
        </h4>
        <h1 className="temperature" id="current-temperature">
          15
        </h1>
        <div className="unit-selector">
          <a href="" id="celcius-selector" className="active">
            ºC
          </a>{" "}
          |
          <a href="" id="fahrenheit-selector">
            ºF
          </a>
        </div>
        <h4 className="date-time" id="day-time">
          Monday, 00:00
        </h4>
      </div>
      <div className="col-6">
        <div className="weather-icon">
          <img
            src="https://pixy.org/src/22/thumbs350/225537.jpg"
            id="weather-icon"
            width="150px"
          />
        </div>
      </div>
    </div>
  );
}
