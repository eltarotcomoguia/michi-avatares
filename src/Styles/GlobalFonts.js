import { createGlobalStyle } from 'styled-components';

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Cosmic_cat';
    src: url('michi-avatares/fonts/Cosmic_cat-Regular.otf') format('otf'),
         url('michi-avatares/fonts/Cosmic_cat-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Cochin LT Std';
    src: url('michi-avatares/fonts/CochinLTStd.woff') format('woff'),
         url('michi-avatares/fonts/CochinLTStd.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`;

export default GlobalFonts;