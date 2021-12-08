import Image from 'next/image';
import {
  StyledForecastContainer,
  StyledWeatherIcon,
  StyledLocationTile,
  StyledForecastInfoTile,
  StyledForecastRow,
  StyledForecastDayTile,
  StyledForecastGroup,
} from './forecast.styles';
import { forecastIconData } from './forecast-icon-data';
import { MdLocationPin, MdWbSunny } from 'react-icons/md';

const Forecast = ({ weather }) => {
  // Get location, forecast, and current weather objects
  const { location, forecast, current } = weather;
  // Get forecast array from weather forecast
  const { forecastday } = forecast;
  // Set today = to correct day in forecast
  const today = forecastday[0];
  // Set min and max temp from forecast based on location -> generalized fahrenheit to
  // only include US as of now
  const todayMinTemp =
    location.country === 'United States of America'
      ? Math.floor(today.day.mintemp_f)
      : Math.floor(today.day.mintemp_c);
  const todayMaxTemp =
    location.country === 'United States of America'
      ? Math.floor(today.day.maxtemp_f)
      : Math.floor(today.day.maxtemp_c);

  // Using weather icons from weatherapi -> get the correct icon for the current weather
  // based on weather conditions code
  const getCurrentWeatherIcon = () => {
    return forecastIconData.map((condition) => {
      if (condition.code === current.condition.code) {
        if (current.is_day) {
          return (
            <Image
              src={`/weather/day/${condition.icon}.png`}
              width={75}
              height={75}
              key={condition.code}
            />
          );
        }
        return (
          <Image
            src={`/weather/night/${condition.icon}.png`}
            width={75}
            height={75}
            key={condition.code}
          />
        );
      }
    });
  };

  const renderForecast = () => {
    // Get next 2 days from 3 day forecast
    // const futureForecast = forecast.forecastday.slice(1);

    return forecastday.map((day) => {
      // Destructure date, date_epoch, condition details from each forecast day object
      const {
        day: { condition: condition },
        date,
        date_epoch,
      } = day;
      // Set min and max temp from forecast based on location -> generalized fahrenheit to
      // only include US as of now
      const dayMinTemp =
        location.country === 'United States of America'
          ? Math.floor(day.day.mintemp_f)
          : Math.floor(day.day.mintemp_c);
      const dayMaxTemp =
        location.country === 'United States of America'
          ? Math.floor(day.day.maxtemp_f)
          : Math.floor(day.day.maxtemp_c);

      // Get day of the month from full forecast date
      let forecastDate = date.substring(date.length - 2);

      // Format date to remove leading 0
      if (forecastDate[0] === '0') {
        forecastDate = forecastDate.substring(1);
      }

      // Get correct icon for url using weather condition code
      const iconUrl = forecastIconData.filter(
        (icon) => icon.code === condition.code
      )[0];

      return (
        <StyledForecastDayTile key={date_epoch}>
          <p>{forecastDate}</p>
          <StyledWeatherIcon>
            <Image
              src={`/weather/day/${iconUrl.icon}.png`}
              height={50}
              width={50}
            />
          </StyledWeatherIcon>
          <p>
            H:{dayMaxTemp}° L:{dayMinTemp}°
          </p>
        </StyledForecastDayTile>
      );
    });
  };

  return (
    <StyledForecastContainer>
      <StyledForecastGroup bg>
        <StyledLocationTile>
          <p>
            {location.name} <MdLocationPin />
          </p>
          <h2>{current.temp_c}°</h2>
        </StyledLocationTile>
        <StyledForecastInfoTile>
          <StyledWeatherIcon>{getCurrentWeatherIcon()}</StyledWeatherIcon>
          <p>{current.condition.text}</p>
          <p>
            H:{todayMaxTemp}° L:{todayMinTemp}°
          </p>
        </StyledForecastInfoTile>
      </StyledForecastGroup>
      <StyledForecastGroup>{renderForecast()}</StyledForecastGroup>
    </StyledForecastContainer>
  );
};

export default Forecast;
