import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    vertical-align: baseline;
  }

  .html {
    @media (max-width: 768px) {
      font-size: 87.5%;
    }
  }

  ${({ theme }) => css`
    html,
    body {
      background: ${theme["gray-900"]};
      color: ${theme["gray-300"]};
    }

    :focus {
      outline: transparent;
      box-shadow: 0 0 0 2px ${theme["green-500"]};
    }
  `}

  body {
    overflow-x: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }

  ol,
  ul {
    list-style: none;
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem "Roboto", sans-serif;
  }

  span {
    display: inline-block;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a,
  p {
    font-size: 14px;
  }
  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
