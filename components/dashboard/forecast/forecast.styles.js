import styled from 'styled-components';

export const StyledForecastContainer = styled.section`
  padding: 1rem;
  margin: 0 0.5rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray800};
  color: ${({ theme }) => theme.colors.cultured};
  grid-area: tasks;
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadow.xl};
  flex: 2;
  display: flex;
  flex-direction: column;
`;

export const StyledForecastGroup = styled.div`
  flex: ${({ flex }) => flex};
  border: 2px solid blue;
  justify-content: space-between;
  display: flex;
`;

export const StyledLocationTile = styled.div`
  height: 100%;
  width: 30%;
  padding: 0.5rem;

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
  width: 30%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  svg {
    margin-left: auto;
  }

  p {
    text-align: right;
    padding: 0;
    margin: 0;
  }
`;
