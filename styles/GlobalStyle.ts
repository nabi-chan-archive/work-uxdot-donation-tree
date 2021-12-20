import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-family: ${({ theme }) => theme.fontFamily};
    font-weight: 400;
  
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    width: 100%;
    overflow-x: hidden;
    font-size: calc(10px + 0.7vmin);
    letter-spacing: -0.05ch;
    font-display: swap;
  }
  
  body {
    width: 100vw;
	  height: 100vh;
    overflow: hidden;
    line-height: 1.5;
  }
  
  b {
    font-weight: 600;
  }
  
  strike {
    opacity: 0.5;
  }
  
  a:link, a:visited {
    color: inherit;
    text-decoration: underline dashed 1px;
    transition: background .3s ease;
	  
    &:hover {
      text-decoration: underline solid 1px;
    }
  }
  
  sup {
    vertical-align: top;
    font-size: 0.6em;
  }
  
  sub {
    vertical-align: bottom;
    font-size: 0.6em;
  }
  
  #__next {
	  display: grid;
	  height: 100%;
	  grid-template-rows: 41px 1fr;
  }
`;

export default GlobalStyle;
