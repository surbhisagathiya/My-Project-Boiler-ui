import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Nunito Sans', NunitoSans, Arial, sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Nunito Sans', NunitoSans, Arial, sans-serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
  Heading,Text{
    font-family: 'Nunito Sans', NunitoSans, Arial, sans-serif; 
  }
`;
