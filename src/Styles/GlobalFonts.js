import { createGlobalStyle } from 'styled-components';

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Cosmic_cat';
    src: url('${process.env.PUBLIC_URL}/fonts/Cosmic_cat-Regular.otf') format('otf'),
         url('${process.env.PUBLIC_URL}/fonts/Cosmic_cat-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Cochin LT Std';
    src: url('${process.env.PUBLIC_URL}/fonts/CochinLTStd.woff') format('woff'),
         url('${process.env.PUBLIC_URL}/fonts/CochinLTStd.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`;

export default GlobalFonts;