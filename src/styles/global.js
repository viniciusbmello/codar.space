import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%;
    overflow: hidden;
  }

  body {
    background: linear-gradient(to right top, #432B6C, #7247CD, #86A8E7); 
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  #__next {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, input, button, textarea {
    font: 300 1.6rem 'Montserrat', sans-serif;
    color: white;
  }
`

export default GlobalStyle
