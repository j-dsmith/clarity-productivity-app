import styled from 'styled-components';

export const StyledUIBtn = styled.button`
  display: grid;
  place-items: center;
  font-size: ${({ btnLg }) => (btnLg ? '1.5rem' : '1.25rem')};
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

export const StyledSaveBtn = styled.button`
  margin-inline: auto;
  padding: 0.5em;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.cultured};
  box-shadow: ${({ theme }) => theme.shadow.xl};
  background-color: ${({ theme }) => theme.colors.gray200};
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 50%;
  cursor: pointer;
  transition: all 150ms linear;

  &:hover {
    border-radius: 0.75em;
    border: 1px solid ${({ theme }) => theme.colors.turquoise};
    background-color: ${({ theme }) => theme.colors.gray700};

    color: ${({ theme }) => theme.colors.turquoise};
  }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1em 0;
  width: ${({ width }) => width};
`;

export const TextInput = styled.input`
  width: 100%;
  border-radius: 0.5rem;
  border: none;
  padding: 1em;
  margin-right: 0.5em;
  font-size: 0.875rem;
  background-color: ${({ theme }) => theme.colors.gray500};
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  color: ${({ theme }) => theme.colors.cultured};
  box-shadow: ${({ theme }) => theme.shadow.lg};

  &:focus {
    outline: none;
  }
`;
