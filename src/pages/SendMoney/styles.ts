import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: auto;
  width: 100%;
  max-width: 1120px;
  padding: 0 20px;

  @media only screen and (max-width: 1260px) {
    width: 100%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 1071px) {
    margin: 0 auto;
    height: auto;
    flex-direction: column;
    align-items: center;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 70px;

  position: relative;

  animation: headerAnimation .8s, 'fadeIn' .8s;

  @keyframes headerAnimation {
    from {bottom: 50px;}
    to {bottom: 0px;}
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 1070px) {
    max-width: 635px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin-top: 60px;

  /* animation */
  overflow: hidden;

  @media only screen and (max-width: 1260px) {
    padding: 0;
  }

  @media only screen and (max-width: 1070px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 420px) {
    padding: 0 15px;
    height: auto;
  }
`;

export const MainContent = styled.div`
  padding-right: 50px;

  @media only screen and (max-width: 1070px) {
    padding: 0;
  }
`;

export const OptionTitle = styled.div`
  margin: 0 0 15px 0;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  color: var(--gray-5);
`;

export const Balance = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: var(--gray-2);

  span {
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    color: var(--pink);
    margin-right: 9px;
  }
`;

