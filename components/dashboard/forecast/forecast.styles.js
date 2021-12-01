import styled from 'styled-components';

export const StyledForecastContainer = styled.section`
  padding: 2rem;
  margin: 0 0.5rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray800};
  color: ${({ theme }) => theme.colors.cultured};
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadow.xl};
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr 2fr;
  grid-template-areas:
    'location location . . . detail detail'
    'day day day day day day day';
`;

export const StyledLocationTile = styled.div`
  height: 100%;
  width: 30%;
  padding: 0 1.5rem;
  grid-area: location;

  h2 {
    margin: 0;
    padding: 0;
    font-size: 6.75vw;
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
  grid-area: detail;

  svg {
    margin-left: auto;
  }

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
  grid-row-start: 2;

  p {
    text-align: center;
    font-size: 1.5rem;
  }
`;
