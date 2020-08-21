import styled from 'styled-components';

interface ICustomCheckProps {
  isChecked: boolean
}

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 2px solid var(--gray-1);
  border-radius: 8px;
  padding: 15px;
  margin: 10px 0;

  color: black;
  transition: 0.3s;

  position: relative;

  animation: transferAnimation 1.8s, 'fadeIn' 1.8s;

  @keyframes transferAnimation {
    from {right: 50px;}
    to {right: 0px;}
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  &:hover {
    box-shadow: 0 0 5px lightgray;
  }
`;

export const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TransferInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    span {
      text-align: center;
      display: flex;
      justify-content: center;

      & + span {
        margin-top: 8px;
        align-items: center;

        div {
          margin-right: 7px;
        }

      }
    }
  }
`;

export const DateInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowIcon = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  box-shadow: 0px 2px 7px rgba(123, 135, 148, 0.28);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;

  svg {
    width: 34px;
    height: 34px;
  }
`;
