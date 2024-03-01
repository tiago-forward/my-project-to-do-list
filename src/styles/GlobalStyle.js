import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    
  html {
    scroll-behavior: smooth;
    line-height: 1.15;
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
  }

  body {
    background-color: beige;
    padding: 10px 10px;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: white;
  }

`