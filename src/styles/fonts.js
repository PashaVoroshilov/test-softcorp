import { createGlobalStyle } from 'styled-components';

export const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url('../assets/fonts/Inter-Regular.woff2') format('woff2'),
    url('../assets/fonts/Inter-Regular.woff') format('woff'),
    url('../assets/fonts/Inter-Regular.ttf') format('truetype');
    font-display: swap;
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('../assets/fonts/Inter-Bold.woff2') format('woff2'),
    url('../assets/fonts/Inter-Bold.woff') format('woff'),
    url('../assets/fonts/Inter-Bold.ttf') format('truetype');
    font-display: swap;
    font-weight: 700;
    font-style: normal;
  }
`