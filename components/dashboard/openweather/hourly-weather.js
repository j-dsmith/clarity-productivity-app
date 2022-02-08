// Dependencies
import { actionTypes } from "./location-details-reducer";

// Style
import { HourlyForecast, WeatherDetailTile } from "./forecast.styles";
import { WiRaindrop } from "react-icons/wi";
import { MdOutlineModeEdit } from "react-icons/md";

function HourlyWeather({
  location,
  fetchWeatherIcon,
  dispatchForecastDetails,
}) {
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
    let direction = "";

    if (degree >= 349) {
      direction = "N";
      return direction;
    }
    if (degree > 304) {
      direction = "NW";
      return direction;
    }
    if (degree > 259) {
      direction = "W";
      return direction;
    }
    if (degree > 214) {
      direction = "SW";
      return direction;
    }
    if (degree > 169) {
      direction = "S";
      return direction;
    }
    if (degree > 124) {
      direction = "SE";
      return direction;
    }
    if (degree > 79) {
      direction = "E";
      return direction;
    }
    if (degree > 34) {
      direction = "NE";
      return direction;
    }
    if (degree >= 0) {
      direction = "N";
      return direction;
    }
  }

  function renderHourlyForecast() {
    const sixHourForecast = hourly.slice(1, 7);
    return sixHourForecast.map(({ dt, weather, temp, pop }) => {
      console.log(weather);
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

  function getStateAbbreviation(state) {
    const lowercaseState = state.toLowerCase();
    let abbreviatedState = "";

    const states = {
      alabama: "AL",
      alaska: "AK",
      arizona: "AZ",
      arkansas: "AR",
      california: "CA",
      colorado: "CO",
      connecticut: "CT",
      delaware: "DE",
      florida: "FL",
      georgia: "GA",
      hawaii: "HI",
      idaho: "ID",
      illinois: "IL",
      indiana: "IN",
      iowa: "IA",
      kansas: "KS",
      kentucky: "KY",
      louisiana: "LA",
      maine: "ME",
      maryland: "MD",
      massachusetts: "MA",
      michigan: "MI",
      minnesota: "MN",
      mississippi: "MS",
      missouri: "MO",
      montana: "MT",
      nebraska: "NE",
      nevada: "NV",
      newhampshire: "NH",
      newjersey: "NJ",
      newmexico: "NM",
      newyork: "NY",
      northcarolina: "NC",
      northdakota: "ND",
      ohio: "OH",
      oklahoma: "OK",
      oregon: "OR",
      pennsylvania: "PA",
      rhodeisland: "RI",
      southcarolina: "SC",
      southdakota: "SD",
      tennessee: "TN",
      texas: "TX",
      utah: "UT",
      vermont: "VT",
      virginia: "VA",
      washington: "WA",
      westvirginia: "WV",
      wisconsin: "WI",
      wyoming: "WY",
    };

    if (state.includes(" ")) {
      const formattedStateForSearch = lowercaseState.split(" ").join("");
      abbreviatedState = states[formattedStateForSearch];
    } else {
      abbreviatedState = states[lowercaseState];
    }

    return abbreviatedState;
  }

  return (
    <HourlyForecast>
      <div id="forecast-header">
        <p id="weather-description">{current.weather[0].description}</p>
        <h3 id="location-name">
          {city},{" "}
          {country === "US"
            ? getStateAbbreviation(state).toUpperCase()
            : country}
          <button
            id="edit-location"
            type="button"
            onClick={() => {
              dispatchForecastDetails({
                type: actionTypes.UPDATE_FORECAST,
                payload: { name: {}, current: {}, hourly: {} },
              });
            }}
          >
            <MdOutlineModeEdit />
          </button>
        </h3>
      </div>
      <div id="hourly-weather-detail">{renderHourlyForecast()}</div>
      <div id="wind-humidity-detail">
        <p>
          Humidity: <span>{current.humidity}%</span>
        </p>
        <p>
          Wind:{" "}
          <span>
            {Math.floor(current.wind_speed)} MPH{" "}
            {convertWindDegreeToCompass(current.wind_deg)}
          </span>
        </p>
      </div>
    </HourlyForecast>
  );
}

export default HourlyWeather;
