import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin: 220px 4% 0 0;
  height: fit-content;
  width: 390px;
  color: black;

  @media only screen and (max-width: 1071px) {
    margin: 50px auto;
    width: 100%;
    max-width: 720px;
    padding: 0 30px;
  }

  @media only screen and (max-width: 420px) {
    width: 380px;
    padding: 0 19px;
  }
`;

export const PaymentDetails = styled.div`
  padding: 40px 40px 60px;
  border: 2px solid #E4E7EB;
  border-bottom: 0;
  border-radius: 4px 4px 0 0;

  > div {
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
  }

  p {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.015em;
    color: #1F2933;
  }
`;

export const ConversionDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 14px;
      line-height: 17px;
      color: #52606D;
      margin: 0 0 0 8px;
    }
  }

  span {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #1F2933;
    display: flex;
    justify-content: center;
  }
`;

export const ArrowIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  box-shadow: 0px 2px 7px rgba(123, 135, 148, 0.28);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 15px;

  svg {
    width: 34px;
    height: 34px;
  }
`;

export const DeliveryDetails = styled.div`
  padding: 50px 40px 40px 40px;
  border: 2px solid #E4E7EB;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
  }

  p {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.015em;
    color: #1F2933;
  }
`;

export const PaymentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  div {
    display: flex;
    align-items: center;
  }

  svg {
    width: 24px;
    height: 24px;
    margin-right: 18px;
  }

  span {
    font-size: 17px;
    line-height: 21px;
    color: #3E4C59;
  }

  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #1F2933;
    margin-bottom: 0;
  }

  @media only screen and (max-width: 1485px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 1071px) {
    flex-direction: row;
  }
`;

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 12px;
  border: 0;
  outline: 0;
  background: #F364A2;
  border-radius: 4px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;

  transition: 0.3s;

  &:hover {
    background: ${shade(0.1, '#F364A2')};
  }
`;

export const InfoButtons = styled.div`
  position: absolute;
  right: 58px;
  top: 82px;
  display: flex;

  @media only screen and (max-width: 1261px) {
    right: 5%;
  }

  @media only screen and (max-width: 1260px) {
    display: none;
  }

  div {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 7px rgba(123, 135, 148, 0.28);
    cursor: pointer;

    &:first-child {
      margin-right: 27px;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #1F2933;
    }
  }
`;
