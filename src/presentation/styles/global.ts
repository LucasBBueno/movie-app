import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 14px "Helvetica Neue", Arial, sans-serif;
    color: #fff;
    background-color: #222323;
  }
`

export default GlobalStyle