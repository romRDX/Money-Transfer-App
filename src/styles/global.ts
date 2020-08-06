import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Inter;
    font-style: normal;
  }

  #root, html, body {
    height: 100%;
    width: 100%;
  }

  body {
    position: relative;
    background:	#FFF;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px "Roboto Slab", sans-serif;
    font-size: 16px;
  }

  h1, h2,h3,h4,h5,h6,strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
