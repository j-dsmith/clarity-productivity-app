import styled from 'styled-components';

export const StyledBtn = styled.button`
  display: grid;
  place-items: center;
  padding: 0.25rem;
  margin: 0 0.25rem;
  border-radius: 0.5rem;
  background-color: ${({ color, outline }) =>
    outline ? 'transparent' : color};
  border: 1px solid ${({ color }) => color};
  color: ${({ theme }) => theme.colors.cultured};
  transition: all 100ms linear;
  cursor: pointer;

  &:hover {
    background-color: ${({ color }) => color};
    box-shadow: ${({ theme }) => theme.shadow.md};
  }

  svg {
    height: 1rem;
    margin-right: 1px;
    width: 1rem;
  }
`;

export const StyledInputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  width: ${({ width }) => width};
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 2rem;
  border-radius: 0.5rem;
  border: none;
  padding: 0 0.5rem;
  margin-right: 0.5rem;
  font-size: 0.85rem;
  background-color: ${({ theme }) => theme.colors.gray500};
  color: ${({ theme }) => theme.colors.cultured};
  box-shadow: ${({ theme }) => theme.shadow.md};

  &:focus {
    outline: none;
  }
`;
