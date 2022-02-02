import styled from 'styled-components';

export const ForecastContainer = styled.div`
  grid-area: forecast;
  background-color: var(--component-bg-light);
  color: var(--text-dark);
  border-radius: 1.5rem;
  box-shadow: var(--shadow-lg);
  padding: 1.5em;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0;
  }

  .image {
    width: 100px;
    border: 1px solid red;
    background-color: var(--color-gray-800);
  }
`;

export const LocationSearchContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5em;
  width: 60%;
  margin: auto;

  label {
    font-size: 0.875rem;
  }

  #save-location-container {
    [type='checkbox'] {
      margin-right: 0.5em;
    }
  }
`;

export const DailyForecast = styled.div`
  border: 1px solid red;
  flex: 2;
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0;
  }

  #forecast-header {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 1fr;
    border: 1px solid limegreen;
  }

  #weather-description {
    text-transform: capitalize;
    grid-column-start: 1;
    grid-row-start: 1;
  }

  #location-name {
    font-weight: 500;
    grid-column-start: 1;
    grid-row-start: 2;
  }

  #hourly-weather-detail {
    display: flex;
  }
`;

export const WeatherDetailTile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;
