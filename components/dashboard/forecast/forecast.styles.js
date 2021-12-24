import styled from 'styled-components';

export const ForecastContainer = styled.section`
  grid-area: fore;
  padding: 1.5em;
  margin: 1.5em 1.5em 0.75em 0.75em;

  background-color: ${({ theme }) => theme.colors.gray800};
  color: ${({ theme }) => theme.colors.cultured};
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadow.lg};
  display: flex;
  flex-direction: column;
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1em;
  background-color: ${({ bg, theme }) => (bg ? theme.colors.gray700 : '')};
  box-shadow: ${({ bg, theme }) => (bg ? theme.shadow.xl : '')};
`;

export const LocationTile = styled.div`
  width: 40%;
  display: grid;
  place-items: center;

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
    color: ${({ theme }) => theme.colors.gray100};

    svg {
      margin-left: 0.25em;
      color: ${({ theme }) => theme.colors.gray100};
    }
  }
`;

export const InfoTile = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  p {
    font-size: 0.875rem;
    padding: 0;
  }
`;

export const FutureForecastTile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;

  h4 {
    font-size: 1rem;
  }

  p {
    text-align: center;
  }
`;

export const WeatherIcon = styled.div`
  display: grid;
  place-items: center;
`;
