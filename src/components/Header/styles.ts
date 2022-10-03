import styled, { css } from "styled-components";

export const Navbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${theme["gray-100"]};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transition: border 0.15s ease-out, color 0.15s ease-out;
      border-radius: 2px;

      &:hover {
        border-bottom: 3px solid ${theme["green-500"]};
      }

      &.active {
        color: ${theme["green-500"]};
      }
    }
  `}
`;
