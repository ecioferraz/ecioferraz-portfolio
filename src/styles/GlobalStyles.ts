import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #2F2842;
    color: #fff;
    font-family: Montserrat, sans-serif;
  }

  div#__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding: 32px 48px;

    @media (max-width: 764px) {
      padding-inline: 20px;
    }
  }
`
