import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --clr-dark-blue-elements: hsl(209 23% 22%);
    --clr-very-dark-blue-bg: hsl(207 26% 17%);
    --clr-dark-blue-text: hsl(200 15% 8%);

    --clr-dark-gray: hsl(0 0% 52%);
    --clr-very-light-gray-bg: hsl(0 0% 98%);
    --clr-white: hsl(0 0% 100%);

    --ff-nunito-sans: 'Nunito Sans', sans-serif;

    --fw-300: 300;
    --fw-400: 400;
    --fw-600: 600;
    --fw-800: 800;

    --bg-transition: background-color  200ms ease-out;
    --color-transition: color  200ms ease-out;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: var(--ff-nunito-sans);
    background-color: ${({ theme }) => theme === 'light' ? 'var(--clr-very-light-gray-bg)' : 'var(--clr-very-dark-blue-bg)'};
    transition: background-color 200ms ease-out;
  }

  html {
    font-size: 62.5%;
  }

  img {
    display: block;
  }

  button {
    font: inherit;
  }
`;

export default GlobalStyles;