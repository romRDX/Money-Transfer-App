import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 70px;
  position: relative;

  animation: planSelectionrAnimation .8s, 'fadeIn' .8s;

  @keyframes planSelectionrAnimation {
    from {top: 50px;}
    to {top: 0px;}
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  > div {
    display: flex;
    justify-content: space-between;
    color: var(--gray-5);
    margin-bottom: 27px;

    @media only screen and (max-width: 740px) {
      flex-direction: column;
    }

    &:first-child {

      p {
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        margin-bottom: 0;
      }

      span {
        font-size: 18px;
        line-height: 22px;
        display: flex;
        align-items: center;

        svg {
          margin-left: 13px;
          width: 24px;
          height: 24px;
          color: var(--gray);
        }
      }
    }

    /* ANT DESIGN CUSTOM CHECK STYLES */
    .ant-radio-group {
      width: 100%;
      display: flex;
      flex-direction: column;

      span {

        @media only screen and (max-width: 420px) {
        padding: 0;
        }
      }
    }

    .ant-radio-wrapper {
      width: 100%;
      padding: 21px;
    }
  }
`;

export const DatePickerContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .ant-picker {
    max-width: 150px;
  }
`;
