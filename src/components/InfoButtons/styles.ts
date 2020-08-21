import styled from 'styled-components';

export const Container = styled.div`
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
      color: var(--gray-5);
    }
  }
`;
