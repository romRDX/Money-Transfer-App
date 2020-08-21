import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 85%;
  max-width: 690px;

  > span {
    margin: 70px 0 45px 0;
    font-weight: 500;
    font-size: 30px;
    line-height: 36px;
    color: var(--gray-5);
    position: relative;

    animation: converterAnimation .8s, 'fadeIn' .8s;

    @keyframes converterAnimation {
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
  }
`;

export const TransactionsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TransactionsDetails = styled.div`

`;

