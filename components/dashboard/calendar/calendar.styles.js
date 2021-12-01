import styled from 'styled-components';

export const StyledCalendarContainer = styled.section`
  padding: 1rem;
  margin: 0 0.5rem;
  height: 100%;
  width: 50%;
  background-color: ${({ theme }) => theme.colors.gray800};
  color: ${({ theme }) => theme.colors.cultured};
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadow.xl};
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  grid-template-areas:
    'head head head . . . .'
    'm t w th f s su';
`;
