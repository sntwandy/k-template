import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    background-color: #d8d8d8;
    font-family: sans-serif;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  #App {
    width: 100%;
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0px;
    padding: 0px;
  }

  ul {
    padding: 0px;
  }

  li {
    list-style: none;
  }

  a {
    color: #000;
    text-decoration: none;
  }
`;
