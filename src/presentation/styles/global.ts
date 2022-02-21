import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #fff;
    background-color: #020202;
  }
  
  h1, h2, span, p, label {
    font: 14px 400 "Helvetica Neue", Arial, sans-serif;
  }
`

export default GlobalStyle