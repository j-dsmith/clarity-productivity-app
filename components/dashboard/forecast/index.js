import {
  StyledForecastContainer,
  StyledForecastGroup,
  StyledLocationTile,
} from './forecast.styles';
import { MdLocationPin } from 'react-icons/md';

const Forecast = () => {
  return (
    <StyledForecastContainer>
      <StyledForecastGroup height="40%">
        <StyledLocationTile>
          <p>
            Barcelona <MdLocationPin />
          </p>
          <h2>54°</h2>
        </StyledLocationTile>
      </StyledForecastGroup>
    </StyledForecastContainer>
  );
};

export default Forecast;
