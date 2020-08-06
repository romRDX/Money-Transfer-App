import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/library-background.jpeg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;

  place-content: center;

  box-sizing: border-box;
  border-top: 30px solid #28262E;
  background: #3f888f;

  width: 100%;
  max-width: 700px;

  a {
      display: flex;
      align-items: center;
      justify-content: center;

      background: #F5B53F;
      text-decoration: none;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #312e38;
      width: 100%;
      max-width: 300px;
      font-family: 'Roboto';
      font-weight: 500;
      margin: 32px auto 0;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#F5B53F')};
      }


    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  filter: blur(0.8px);
  background-size: cover;
`;

export const TradeMark = styled.div`
  display: flex;
  align-items: center;
  align-self: center;

  h2 {
    font-size: 48px;
    margin: 0 20px;
  }

  img {
    width: 150px;
    height: 150px;
  }
`;
