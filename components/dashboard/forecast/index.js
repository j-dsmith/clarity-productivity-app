import {
  StyledForecastContainer,
  StyledForecastGroup,
  StyledLocationTile,
  StyledForecastInfoTile,
  StyledForecastRow,
  StyledForecastDayTile,
} from './forecast.styles';
import { MdLocationPin, MdWbSunny } from 'react-icons/md';

const Forecast = () => {
  return (
    <StyledForecastContainer>
      <StyledLocationTile>
        <p>
          Barcelona <MdLocationPin />
        </p>
        <h2>54°</h2>
      </StyledLocationTile>
      <StyledForecastInfoTile>
        <MdWbSunny />
        <p>Mostly Sunny</p>
        <p>H:60° L:47°</p>
      </StyledForecastInfoTile>

      <StyledForecastDayTile>
        <p>12</p>
        <MdWbSunny />
        <p>45°</p>
      </StyledForecastDayTile>
      <StyledForecastDayTile>
        <p>12</p>
        <MdWbSunny />
        <p>45°</p>
      </StyledForecastDayTile>
      <StyledForecastDayTile>
        <p>12</p>
        <MdWbSunny />
        <p>45°</p>
      </StyledForecastDayTile>
      <StyledForecastDayTile>
        <p>12</p>
        <MdWbSunny />
        <p>45°</p>
      </StyledForecastDayTile>
      <StyledForecastDayTile>
        <p>12</p>
        <MdWbSunny />
        <p>45°</p>
      </StyledForecastDayTile>
      <StyledForecastDayTile>
        <p>12</p>
        <MdWbSunny />
        <p>45°</p>
      </StyledForecastDayTile>
      <StyledForecastDayTile>
        <p>12</p>
        <MdWbSunny />
        <p>45°</p>
      </StyledForecastDayTile>
    </StyledForecastContainer>
  );
};

export default Forecast;
