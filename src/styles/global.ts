import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @font-face {
        font-family: 'Futura LT';
        src: url("/fonts/FuturaLT-Book.ttf");
    }

    body {
        background: ${props => props.theme.colors.background};
        font-size: 14px;
        color: ${props => props.theme.colors.text};
        font-family: 'Futura-LT';
    }

    

`