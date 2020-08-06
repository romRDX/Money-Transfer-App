import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 10px;
  overflow: hidden;
  margin: 88px 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media only screen and (max-width: 1485px) {
    margin: 5px 0 15px;
    height: 97px;
  }
`;
