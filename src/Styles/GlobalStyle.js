import { createGlobalStyle } from 'styled-components';
import { useColor } from '../hooks/useColor';

const { color, imagen } = useColor();

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        vertical-align: baseline;
    }
    
    html{
        font-size: 62.5%;
        height: 100vh;
        width: 100vw;
    }

    body {
      
        background-image: url(${imagen});
        background-size: cover;
       // background-repeat: no-repeat;
        background-position: center;
        color: ${color};
        font-family: 'Cochin LT Std', sans-serif;
        font-weight: 400;
        display: flex;
        flex-wrap:wrap;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
    }

    button {
        background-color: ${color};
    }
`