import { createGlobalStyle } from "styled-components"

import { Colors } from "../../data"

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body {
    height: 100%;
    width: 100%;
    background: ${Colors.light};
    color: ${Colors.darker};
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Titillium Web', sans-serif;
    font-size: 18px;
  }

  a, a:visited {
    color: #000;
    text-decoration: none;
    border-bottom: 1px dotted ${Colors.secondary};
  }
`
