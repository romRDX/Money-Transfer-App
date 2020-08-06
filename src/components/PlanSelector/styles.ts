import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 70px;
  position: relative;



  > div {
    display: flex;
    justify-content: space-between;
    color: #1F2933;
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
          color: #52606D;
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
    }
  }
`;

export const DatePickerContainer = styled.div`
  display: flex;
`;
