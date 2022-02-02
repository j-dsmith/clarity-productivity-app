// Style
import { DailyForecast, WeatherDetailTile } from './forecast.styles';

function DailyWeather(location) {
  const { name, hourly, current } = location.location;

  function convertTimestampToHour(timestamp) {
    let hour = new Date(timestamp * 1000).getHours();
    if (hour > 12) {
      hour -= 12;
      return `${hour} PM`;
    }
    return `${hour} AM`;
  }

  function renderHourlyForecast() {
    const sixHourForecast = hourly.slice(1, 7);
    return sixHourForecast.map((hour) => {
      return (
        <WeatherDetailTile key={hour.dt}>
          <p>{convertTimestampToHour(hour.dt)}</p>
        </WeatherDetailTile>
      );
    });
  }

  return (
    <DailyForecast>
      <div id="forecast-header">
        <p id="weather-description">{current.weather[0].description}</p>
        <h3 id="location-name">{name}</h3>
      </div>
      <div id="hourly-weather-detail">{renderHourlyForecast()}</div>
    </DailyForecast>
  );
}

export default DailyWeather;
