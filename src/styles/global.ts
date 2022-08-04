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
        background: #fff;
        font-size: 14px;
        color: #000;
        font-family: 'Futura-LT';
    }

    

`