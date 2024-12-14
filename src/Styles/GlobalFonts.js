import { createGlobalStyle } from 'styled-components';

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Cosmic_cat';
    src: url('/fonts/Cosmic_cat-Regular.otf') format('otf'),
         url('/fonts/Cosmic_cat-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Cochin LT Std';
    src: url('/fonts/CochinLTStd.woff') format('woff'),
         url('/fonts/CochinLTStd.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`;

export default GlobalFonts;