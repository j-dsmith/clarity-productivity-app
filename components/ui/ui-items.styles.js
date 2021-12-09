import styled from 'styled-components';

export const StyledBtn = styled.button`
  display: grid;
  place-items: center;
  font-size: ${({ btnLg }) => (btnLg ? '1.5rem' : '1rem')};
  padding: 0.25em;
  margin: 0 0.25em;
  border-radius: 0.5em;
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
`;

export const StyledInputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1em 0;
  width: ${({ width }) => width};
`;

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 0.5rem;
  border: none;
  padding: 1em;
  margin-right: 0.5em;
  font-size: 0.875rem;
  background-color: ${({ theme }) => theme.colors.gray500};
  color: ${({ theme }) => theme.colors.cultured};
  box-shadow: ${({ theme }) => theme.shadow.lg};

  &:focus {
    outline: none;
  }
`;
