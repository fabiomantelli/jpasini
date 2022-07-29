import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        transition: 0.1s;
    } 
    .container {
        display: flex;
        margin: auto;
        width: 100vw;        
    }

    .left-side {
      width: 75%;
      background-image: url('/antonioEmilio/background.webp');
      background-size: cover;
    }

    .right-side  {
      width: 25%;
      background-color: black;
      height: 100vh;
    }

    body {
        background: ${(props) => props.theme.background};
        color: ${props => props.theme.text};        
    }
    h1 {
        color: ${props => props.theme.titles};        
    }


    .accent {
        background-color: ${props => props.theme.accent};
        color: ${props => props.theme.text};
        height: 30px;
    }
`