import styled, { css } from "styled-components";

export const Display = styled.main`
  ${({ theme }) => css`
    flex: 1;
    padding: 3.5rem;

    display: flex;
    flex-direction: column;

    h1 {
      font-size: 1.5rem;
      color: ${theme["gray-100"]};
    }
  `}
`;
