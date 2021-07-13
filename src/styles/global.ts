import { createGlobalStyle } from 'styled-components';

import { mediaQueries } from './mediaQueries';

export default createGlobalStyle`
  @font-face {
      font-family: 'Roboto';
      src: local('Roboto'), local('Roboto'),
        url(${'./fonts/Roboto-Regular.ttf'}) format('truetype'),
        url(${'./fonts/Roboto-Medium.ttf'}) format('truetype'),
        url(${'./fonts/Roboto-Bold.ttf'}) format('truetype');
      font-weight: 300, 400, 700;
      font-style: normal;
  }

  :root {
    --background-theme: ${({ theme }) => theme.colors.body};
    --background-white: #fefefe;
    --background-black: #000000;

    --font-color-theme: ${({ theme }) => theme.colors.text};
    --font-color-white: #fefefe;
    --font-color-black: #000000;

    --color-gray: #323437;
    --color-medium-gray: #3c4858;
    --color-light-gray: #e5e5e5;
    --color-violet: #8719cc;
  }

  * {
    margin: 0;
    padding: 0;
    outline-color: #65B2FF;
    box-sizing: border-box;
  }

  html {
    font-size: 45%;

    ${mediaQueries('sm')`
      font-size: 62.5%;
    `}; /* a cada 1rem será considerada 10px */    
  }

  body {
    height: 100vh;
    padding: 0;
    background: var(--background-theme) 0% 0% no-repeat padding-box;
    color: var(--font-color-theme);

    overflow-y: auto;

    ${mediaQueries('sm')`
      overflow: auto;
    `};
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  } 

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  a {
    text-decoration: none;
    background: none;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 300;
    cursor: pointer;
    border: 0;
    transition: 180ms ease-in-out;
  }

  button {
    cursor: pointer;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  ul {
    list-style: none;
    text-align: left;
    padding: 0;
  }
  
  /** Customização do scrollbars */
  * {
    scrollbar-width: thin;
    scrollbar-color: var(--color-violet) ${({ theme }) => theme.colors.body};
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.body};
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--color-violet);
    border-radius: 20px;
    border: 3px solid ${({ theme }) => theme.colors.body};
  }
`;