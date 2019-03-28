import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
      margin:0;
      padding:0;
      border-sizing: border-box;
      outline:0;
  }
  
  html, body, #root {
      height:100%;
      background: #e9ebee
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Montserrat', sans-serif;
   
}
`;
