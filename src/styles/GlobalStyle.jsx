import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: hsl(235, 18%, 26%);
  }

  li {
    list-style: none;
  }

  p {
    font-size: 14px;
    color: hsl(235, 18%, 26%);
  }

`