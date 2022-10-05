import styled, { css, DefaultTheme } from "styled-components";

type ContainerButtonProps = {
  btnColor: "primary" | "danger";
};

const containerModifier = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme["green-500"]};

    &:hover:not(:disabled) {
      background: ${theme["green-700"]};
    }
  `,
  danger: (theme: DefaultTheme) => css`
    background: ${theme["red-500"]};

    &:hover:not(:disabled) {
      background: ${theme["red-700"]};
    }
  `,
};

export const Container = styled.button<ContainerButtonProps>`
  ${({ theme, btnColor }) => css`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;
    color: ${theme["gray-100"]};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-weight: bold;

    transition: background 0.15s ease-in-out;

    ${containerModifier[btnColor](theme)}
  `}
`;
