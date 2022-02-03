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
    width: 60px;
    filter: drop-shadow(var(--shadow-sm));
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

  .search-format {
    font-size: 0.875rem;
    border-left: 2px solid var(--color-blue);
    padding-left: 1rem;
  }
`;

export const HourlyForecast = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1em;

  h3,
  p {
    margin: 0;
    line-height: 1;
  }

  #forecast-header {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  #weather-description {
    text-transform: capitalize;
  }

  #location-name {
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5em;

    svg {
      color: var(--color-gray-800);
      cursor: pointer;
      transition: all 150ms linear;

      &:hover {
        color: var(--color-blue);
        transform: scale(1.06);
        filter: drop-shadow(var(--shadow-sm));
      }
    }
  }

  #hourly-weather-detail {
    display: flex;
    gap: 0.5em;
    flex: 2;
  }

  #wind-humidity-detail {
    display: flex;
    gap: 1em;

    span {
      font-weight: 500;
    }
  }
`;

export const WeatherDetailTile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.5em;
  background-color: var(--color-gray-400);
  padding: 1em;
  border-radius: 0.75em;
  transition: all 150ms ease;

  p.hour {
    font-size: 0.875rem;
    margin-bottom: -1rem;
  }

  p.temp {
    font-size: 1.5rem;
    font-weight: 700;
    text-shadow: var(--shadow-sm);
    margin-top: -1rem;
  }

  p.precipitation {
    display: flex;
    align-items: center;
    color: var(--color-blue);

    svg {
      font-size: 1.5rem;
      margin-right: -0.25rem;
    }
  }

  &:hover {
    box-shadow: var(--shadow-md);
    transform: scale(1.06);
  }
`;
