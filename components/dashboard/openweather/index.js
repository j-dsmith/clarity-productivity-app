// Dependencies
import { useState, useReducer } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Geocode from 'react-geocode';

// Style
import { ForecastContainer, LocationSearchContainer } from './forecast.styles';

// Components

// Style
import { MdAdd, MdOutlineCancel, MdOutlineLocationOn } from 'react-icons/md';

// Components
import { InputGroup, TextInput } from '../../ui/ui-items.styles';
import UIBtn from '../../ui/ui-btn';
import HourlyWeather from './hourly-weather';

function Forecast() {
  const [searchLocation, setSearchLocation] = useState('');
  const [locationDetails, setLocationDetails] = useState({
    name: '',
    current: {},
    daily: {},
  });

  async function getForecastByName() {
    // Split location from input into separate segments for search
    const locationSegments = searchLocation.split(',');

    // Create url to search openweather api for location geocode information
    const locationGeocodeUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${locationSegments.map(
      (segment) => segment.trim()
    )}&limit=1&appid=${process.env.OPENWEATHER_API_KEY}`;

    // Fetch geocode information from openweather api
    const geocodeResult = await axios.get(locationGeocodeUrl);

    // Get location, destructure name, lat, and lon properties
    const location = geocodeResult.data[0];
    const { name: city, state, country, lat, lon } = location;

    const forecast = await fetchWeather(lat, lon);

    if (Object.entries(forecast).length > 0) {
      // Update state with fetched info
      setLocationDetails({
        name: { city, state, country },
        current: forecast.data.current,
        daily: forecast.data.daily,
        hourly: forecast.data.hourly,
      });
    }
  }

  async function fetchWeather(lat, lon) {
    // Create url to fetch forecast using location
    const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,daily,alerts&units=imperial&appid=${process.env.OPENWEATHER_API_KEY}`;
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
          {/* <UIBtn
            icon={<MdOutlineLocationOn />}
            color="var(--text-dark)"
            handler={getLocationByCoords}
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
    return (
      <div className="image">
        <Image
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          height={100}
          width={100}
        />
      </div>
    );
  }

  return (
    <ForecastContainer>
      <h2>Forecast</h2>
      {Object.entries(locationDetails.current).length === 0 ? (
        renderLocationSearchbar()
      ) : (
        <HourlyWeather
          location={locationDetails}
          fetchWeatherIcon={fetchWeatherIcon}
        />
      )}
    </ForecastContainer>
  );
}

export default Forecast;
