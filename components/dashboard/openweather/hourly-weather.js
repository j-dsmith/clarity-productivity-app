// Style
import { HourlyForecast, WeatherDetailTile } from './forecast.styles';
import { WiRaindrop } from 'react-icons/wi';
import { MdOutlineModeEdit } from 'react-icons/md';

// Components
import UIBtn from '../../ui/ui-btn';

function HourlyWeather({ location, fetchWeatherIcon }) {
  const { name, hourly, current } = location;
  const { city, state, country } = name;

  function convertTimestampToHour(timestamp) {
    let hour = new Date(timestamp * 1000).getHours();
    if (hour === 12) {
      return `${hour} PM`;
    }
    if (hour === 0) {
      return `12 AM`;
    }
    if (hour > 12) {
      hour -= 12;
      return `${hour} PM`;
    }
    return `${hour} AM`;
  }

  function convertWindDegreeToCompass(degree) {
    let direction = '';

    if (degree >= 349) {
      direction = 'N';
      return direction;
    }
    if (degree > 304) {
      direction = 'NW';
      return direction;
    }
    if (degree > 259) {
      direction = 'W';
      return direction;
    }
    if (degree > 214) {
      direction = 'SW';
      return direction;
    }
    if (degree > 169) {
      direction = 'S';
      return direction;
    }
    if (degree > 124) {
      direction = 'SE';
      return direction;
    }
    if (degree > 79) {
      direction = 'E';
      return direction;
    }
    if (degree > 34) {
      direction = 'NE';
      return direction;
    }
    if (degree >= 0) {
      direction = 'N';
      return direction;
    }
  }

  function renderHourlyForecast() {
    const sixHourForecast = hourly.slice(1, 7);
    return sixHourForecast.map(({ dt, weather, temp, pop }) => {
      return (
        <WeatherDetailTile key={dt}>
          <p className="hour">{convertTimestampToHour(dt)}</p>
          {fetchWeatherIcon(weather[0].icon)}
          <p className="temp">{Math.floor(temp)}˚</p>
          <p className="precipitation">
            <WiRaindrop />
            {Math.floor(pop * 100)}%
          </p>
        </WeatherDetailTile>
      );
    });
  }

  return (
    <HourlyForecast>
      <div id="forecast-header">
        <p id="weather-description">{current.weather[0].description}</p>
        <h3 id="location-name">
          {city}, {country === 'US' ? state.slice(0, 2).toUpperCase() : country}
          <div id="edit-location">
            <MdOutlineModeEdit />
          </div>
        </h3>
      </div>
      <div id="hourly-weather-detail">{renderHourlyForecast()}</div>
      <div id="wind-humidity-detail">
        <p>
          Humidity: <span>{current.humidity}%</span>
        </p>
        <p>
          Wind:{' '}
          <span>
            {Math.floor(current.wind_speed)} MPH{' '}
            {convertWindDegreeToCompass(current.wind_deg)}
          </span>
        </p>
      </div>
    </HourlyForecast>
  );
}

export default HourlyWeather;
