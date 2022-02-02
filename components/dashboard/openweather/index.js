// Dependencies
import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

// Style
import { ForecastContainer, LocationSearchContainer } from './forecast.styles';

// Components

// Style
import { MdAdd, MdOutlineCancel, MdOutlineLocationOn } from 'react-icons/md';

// Components
import { InputGroup, TextInput } from '../../ui/ui-items.styles';
import UIBtn from '../../ui/ui-btn';
import DailyWeather from './daily-weather';

function useGeolocation() {
  const [geolocation, setGeolocation] = useState({});
  navigator.geolocation.getCurrentPosition((pos) => setGeolocation(pos.coords));

  return geolocation;
}

function Forecast() {
  const [searchLocation, setSearchLocation] = useState('');
  const [locationDetails, setLocationDetails] = useState({
    name: '',
    current: {},
    daily: {},
  });

  async function fetchWeather() {
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
    const { name, lat, lon } = location;

    // Create url to fetch forecast using location
    const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=imperial&appid=${process.env.OPENWEATHER_API_KEY}`;
    const forecast = await axios.get(weatherURL);
    setLocationDetails({
      name: name,
      current: forecast.data.current,
      daily: forecast.data.daily,
      hourly: forecast.data.hourly,
    });
  }

  function renderForecastDetails() {
    let icon = '';
    if (locationDetails.current.weather) {
      icon = locationDetails.current.weather[0].icon;

      return fetchWeatherIcon(icon);
    }
  }

  function renderLocationSearchbar() {
    return (
      <LocationSearchContainer>
        <label htmlFor="location">
          Search location using (City, State, Country)
        </label>

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
            handler={fetchWeather}
          />
          <UIBtn icon={<MdOutlineLocationOn />} color="var(--text-dark)" />
        </InputGroup>
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
        <DailyWeather location={locationDetails} />
      )}
      {locationDetails.current ? renderForecastDetails() : null}
    </ForecastContainer>
  );
}

export default Forecast;
