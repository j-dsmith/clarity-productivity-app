// Dependencies
import { useState, useReducer, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import locationDetailsReducer, {
  actionTypes,
  initialState,
} from "./location-details-reducer";

// Style
import { ForecastContainer, LocationSearchContainer } from "./forecast.styles";

// Components

// Style
import { MdAdd, MdOutlineCancel, MdOutlineLocationOn } from "react-icons/md";

// Components
import { InputGroup, TextInput } from "../../ui/ui-items.styles";
import UIBtn from "../../ui/ui-btn";
import HourlyWeather from "./hourly-weather";

function Forecast() {
  const [searchLocation, setSearchLocation] = useState("");
  const [locationDetails, dispatchForecastDetails] = useReducer(
    locationDetailsReducer,
    initialState
  );
  const [geolocation, setGeolocation] = useState({});

  async function getForecastByName() {
    // Split location from input into separate segments for search
    const locationSegments = searchLocation.split(",");

    // Create url to search openweather api for location geocode information
    const locationGeocodeUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${locationSegments.map(
      (segment) => segment.trim()
    )}&limit=1&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`;

    // Fetch geocode information from openweather api
    const geocodeResult = await axios.get(locationGeocodeUrl);

    // Get location, destructure name, lat, and lon properties
    const location = geocodeResult.data[0];
    const { name: city, state, country, lat, lon } = location;

    const forecast = await fetchWeather(lat, lon);

    if (Object.entries(forecast).length > 0) {
      // Update state with fetched info
      dispatchForecastDetails({
        type: actionTypes.UPDATE_FORECAST,
        payload: {
          name: { city, state, country },
          current: forecast.data.current,
          hourly: forecast.data.hourly,
        },
      });
    }
  }

  // Get user coordinates using navigator.geolocation
  async function getUserCoordinates() {
    navigator.permissions
      .query({
        name: "geolocation",
      })
      .then((permission) => {
        console.log(permission);
        if (permission.state === "prompt") {
          console.log(permission.state);
          navigator.geolocation.getCurrentPosition(
            (pos) => setGeolocation(pos.coords),
            (error) => alert(error)
          );
        } else if (permission.state === "granted") {
          navigator.geolocation.getCurrentPosition((pos) =>
            setGeolocation(pos.coords)
          );
        } else if (permission.state === "denied") {
          alert(
            "You have not authorized location tracking for this application, please change these permissions or search using location name instead."
          );
        }
      });
  }

  // Fetch forecast from openweathermap api using latitude, longitude
  async function fetchWeather(lat, lon) {
    // Create url to fetch forecast using location
    const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,daily,alerts&units=imperial&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`;
    const forecast = await axios.get(weatherURL);

    return forecast;
  }

  function renderLocationSearchbar() {
    return (
      <LocationSearchContainer>
        <InputGroup width="100%">
          <TextInput
            id="location"
            type="text"
            placeholder="Seattle, WA, USA"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          />
          <UIBtn
            icon={!searchLocation ? <MdOutlineCancel /> : <MdAdd />}
            color="hsl(222, 100%, 61%)"
            disabled={!searchLocation ? true : false}
            handler={getForecastByName}
          />
          {/* Issue with user coordinates when pushed to vercel */}

          {/* <UIBtn
            icon={<MdOutlineLocationOn />}
            color="var(--text-dark)"
            handler={getUserCoordinates}
          /> */}
        </InputGroup>
        <p className="search-format">
          For US Locations, format as (City, State, Country)
        </p>
        <p className="search-format">
          For International locations, format as (City, Country)
        </p>
      </LocationSearchContainer>
    );
  }

  function fetchWeatherIcon(icon) {
    console.log(icon);
    return (
      <div className="image">
        <Image
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          height={100}
          width={100}
          priority
        />
      </div>
    );
  }

  const { latitude, longitude } = geolocation;
  useEffect(() => {
    (async () => {
      if ((latitude, longitude)) {
        // Get forecast
        const forecast = await fetchWeather(latitude, longitude);

        // Get location name from reverse geocode lookup
        const locationReverseGeocodeUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`;
        const reverseGeocodeResult = await axios.get(locationReverseGeocodeUrl);
        const { name: city, state, country } = reverseGeocodeResult.data[0];

        if (
          Object.entries(forecast).length > 0 &&
          Object.entries(reverseGeocodeResult.data[0]).length > 0
        ) {
          dispatchForecastDetails({
            type: actionTypes.UPDATE_FORECAST,
            payload: {
              name: { city, state, country },
              current: forecast.data.current,
              hourly: forecast.data.hourly,
            },
          });
        }
      }
    })();
  }, [latitude, longitude]);

  return (
    <ForecastContainer>
      <h2>Forecast</h2>
      {Object.entries(locationDetails.current).length === 0 ? (
        renderLocationSearchbar()
      ) : (
        <HourlyWeather
          location={locationDetails}
          fetchWeatherIcon={fetchWeatherIcon}
          dispatchForecastDetails={dispatchForecastDetails}
        />
      )}
    </ForecastContainer>
  );
}

export default Forecast;
