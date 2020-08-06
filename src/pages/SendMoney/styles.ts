import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  width: 85%;

  @media only screen and (max-width: 1260px) {
    width: 100%;
  }

  @media only screen and (max-width: 1071px) {
    margin: 0 auto;
    height: auto;
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.div`
  height: 100%;
  padding: 0 50px;
  width: 100%;
  max-width: 720px;

  @media only screen and (max-width: 1145px) {
    padding: 0 30px;
  }

  @media only screen and (max-width: 420px) {
    padding: 0 15px;
    height: auto;
  }
`;

export const OptionTitle = styled.div`
  margin: 70px 0 15px 0;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  color: #1F2933;

  @media only screen and (max-width: 1145px) {
    margin-top: 40px;
  }
`;

export const Balance = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #616E7C;

  span {
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    color: #F364A2;
    margin-right: 9px;
  }
`;

