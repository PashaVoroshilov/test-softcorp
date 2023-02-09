import 'normalize.css';
import { createGlobalStyle } from 'styled-components';
import { media, colors } from "./vars";

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    min-height: 100%;
    height: 1px;
    width: 100%;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: .27777777778vw;
    line-height: 1;
    color: ${colors.mainColor};
    padding: 0;
    margin: 0;
    
    @media ${media.tabletS} {
      font-size: .13020833333vw;
    }
    @media ${media.tablet} {
      font-size: .06944444444vw;
    }
    @media ${media.desktop} {
      font-size: 1.166666px;
    }
  }
  
  #root {
    height: 100%;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 0;
  }

  p {
    margin: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
    background-color: transparent;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  svg {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

  button {
    cursor: pointer;
  }

  input,
  select,
  button {
    font-family: inherit;
    padding: 0;
    background: transparent;
    border: none;
    outline: none;
    margin: 0;
  }
  
  input,
  textarea {
    &::placeholder {
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }
  }
`
