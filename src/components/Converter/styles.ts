import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;

  /* @media only screen and (max-width: 1260px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } */

  @media only screen and (max-width: 740px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  > svg {
    margin-bottom: 50px;
    cursor: pointer;
    align-self: flex-end;
    width: 25px;
    height: 25px;
    color: #F364A2;
    transition: .3s;

    &:hover {
      transform: rotate(-90deg);
    }

    @media only screen and (max-width: 1240px) {

    }

    @media only screen and (max-width: 740px) {
      align-self: auto;
      margin: 25px 0;
    }
  }
`;

export const ConversionOptions = styled.div`
  padding: 5px 22px;
  background: #F5F7FA;
  border-radius: 8px;
  color: black;
  width: 270px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #52606D;

  @media only screen and (max-width: 740px) {
    width: 370px;
    margin: 0 auto;
  }

  span {
    justify-self: flex-start;
  }

  /* REACT-SELECT STYLES */
  .react-select__control {
    background: transparent;
    border: 0;
    cursor: pointer;
    justify-self: end;
    width: 120px;
    box-shadow: none;
  }

  .react-select__input {
    outline: none;
  }

  .react-select__indicator {

    svg {
      color: black;
    }
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__placeholder {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #323F4B;
  }
`;

export const ValueBox = styled.div`
  padding: 26px;
  width: 270px;
  height: 128px;
  background: #F5F7FA;
  border-radius: 8px;
  margin-top: 28px;

  @media only screen and (max-width: 740px) {
    width: 370px;
    margin: inherit auto;
  }

  p {
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #52606D;
  }

  span {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #323F4B;
    display: flex;
    align-items: flex-end;

    > div {
      max-width: 80%;
    }

    b {
      font-weight: 600;
      font-size: 30px;
      line-height: 36px;
    }

    p {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: #323F4B;
      margin: 0 0 0 12px;
    }
  }

  input {
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    color: #323F4B;
    padding: 0;
  }
`;
