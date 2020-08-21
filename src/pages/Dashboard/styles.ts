import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;

  @media only screen and (max-width: 1260px) {
    flex-direction: column;
  }
`;

export const OptionTitle = styled.div`
  margin: 70px 0 15px 0;
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

