import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="weather-app">
      <body>
        <header>
          <form className="search-form" id="search-form">
            <input
              type="search"
              id="search-form-input"
              className="search-form-input"
              placeholder="Enter a city.."
              required
            />

            <input
              type="submit"
              className="search-form-button"
              value="Search"
            />
          </form>
        </header>
        <div className="weather-app-data">
          <div>
            <h1 className="weather-app-city" id="city">
              Paris
            </h1>
            <p className="weather-app-details">
              <span id="time">Monday</span>,
              <span id="description">cloudy </span>
              <br />
              Humidity:<strong id="humidity"></strong> , Wind:
              <strong id="wind"></strong>
            </p>
          </div>
          <div className="weather-app-temperature-container">
            <div id="icon">
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png"
                alt="weather-app-icon"
                className="weather-app-icon"
              />
            </div>

            <div className="weather-app-temperature" id="temperature"></div>
            <div className="weather-app-unit">°C</div>
          </div>
        </div>
        <div className="weather-forecast" id="forecast"></div>

        <Weather />
      </body>
    </div>
  );
}

export default App;
