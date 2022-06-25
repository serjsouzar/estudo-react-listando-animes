import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
 
 :root{
    --background: #f6f4f6;
  }

  body{
    background: var(--background);
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }
  strong, h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }
`