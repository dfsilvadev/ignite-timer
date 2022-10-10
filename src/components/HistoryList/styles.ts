import styled, { css, DefaultTheme } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    flex: 1;
    overflow: auto;
    margin-top: 2rem;

    table {
      width: 100%;
      border-collapse: collapse;
      min-width: 600px;

      th {
        background-color: ${theme["gray-600"]};
        padding: 1rem;
        text-align: left;
        color: ${theme["gray-100"]};
        font-size: 0%.875rem;
        line-height: 1.6;

        &:first-child {
          border-top-left-radius: 8px;
          padding-left: 1.5rem;
        }

        &:last-child {
          border-top-right-radius: 8px;
          padding-right: 1.5rem;
        }
      }

      td {
        ${({ theme }) => css`
          background: ${theme["gray-700"]};
          border-top: 4px solid ${theme["gray-800"]};
          padding: 1rem;
          font-size: 0.875rem;
          line-height: 1.6;

          &:first-child {
            border-top-left-radius: 8px;
            width: 50%;
          }

          &:last-child {
            border-top-right-radius: 8px;
          }
        `}
      }
    }
  `}
`;

type StatusProps = {
  statusColor: keyof typeof statusModifier;
};

const statusModifier = {
  yellow: (theme: DefaultTheme) => css`
    background: ${theme["yellow-500"]};
  `,
  green: (theme: DefaultTheme) => css`
    background: ${theme["green-500"]};
  `,
  red: (theme: DefaultTheme) => css`
    background: ${theme["red-500"]};
  `,
};

export const Status = styled.span<StatusProps>`
  ${({ theme, statusColor }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: "";
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;

      ${statusModifier[statusColor](theme)}
    }
  `}
`;
