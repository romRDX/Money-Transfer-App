import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --white: #FFF;
    --gray-1: #E4E7EB;
    --gray-2: #616E7C;
    --gray-3: #52606D;
    --gray-4: #323f4b;
    --gray-5: #1F2933;
    --pink: #F364A2;
  }

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
    background:	var(--white);
    color: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px "Inter", sans-serif;
    font-size: 16px;
  }

  h1, h2,h3,h4,h5,h6,strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
