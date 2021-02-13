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
    height: 100vh;
    overflow: hidden;
  }

  body {
    background: radial-gradient(at 50% 100%, rgba(64,64,96,1), black); 
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  #__next {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, input, button, textarea {
    font: 400 1.6rem monospace;
    color: white;
  }

  #wrapper {
    z-index: 1;
  }
`

export default GlobalStyle
