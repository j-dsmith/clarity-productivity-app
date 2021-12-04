import styled from 'styled-components';

export const StyledEditorContainer = styled.div`
  width: 78%;
  position: absolute;
  right: 0;
  top: 0;

  .toolbar {
    background-color: ${({ theme }) => theme.colors.gray700};
    border: none;

    .rdw-option-wrapper {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.cultured};
      border: none;

      height: 2rem;
      width: 2rem;
      border-radius: 0;

      &:hover {
        border: none;
        outline: none;
        box-shadow: none;
        border-bottom: 1px solid ${({ theme }) => theme.colors.bluecrayola};
      }

      img {
        filter: invert(100%);
      }
    }
  }
`;
