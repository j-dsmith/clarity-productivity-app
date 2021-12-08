import styled from 'styled-components';

export const StyledForecastContainer = styled.section`
  padding: 1rem;
  margin: 0 0.5rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray800};
  color: ${({ theme }) => theme.colors.cultured};
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadow.xl};
  display: flex;
  flex-direction: column;
`;

export const StyledForecastGroup = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  border-radius: 1rem;
  background-color: ${({ bg, theme }) => (bg ? theme.colors.gray700 : '')};

  box-shadow: ${({ bg, theme }) => (bg ? theme.shadow.lg : '')};
`;

export const StyledLocationTile = styled.div`
  height: 100%;
  padding: 0 1.5rem;
  grid-area: location;

  h2 {
    margin: 0;
    padding: 0;
    font-size: 5rem;
    font-weight: 400;
  }

  p {
    font-size: 1.25rem;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;

    svg {
      margin-left: 0.25rem;
    }
  }
`;

export const StyledForecastInfoTile = styled.div`
  height: 100%;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  grid-area: detail;

  p {
    text-align: right;
    padding: 0;
    margin: 0;
  }
`;

export const StyledForecastDayTile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  grid-row-start: day;
  height: 90%;
  width: 40%;

  p {
    text-align: center;
  }
`;

export const StyledWeatherIcon = styled.div`
  display: grid;
  place-content: center;
`;
