import {
  StyledForecastContainer,
  StyledForecastGroup,
  StyledLocationTile,
  StyledForecastInfoTile,
} from './forecast.styles';
import { MdLocationPin, MdWbSunny } from 'react-icons/md';

const Forecast = () => {
  return (
    <StyledForecastContainer>
      <StyledForecastGroup flex="1">
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
      </StyledForecastGroup>
      <StyledForecastGroup flex="2"></StyledForecastGroup>
    </StyledForecastContainer>
  );
};

export default Forecast;
