import styled from 'styled-components';

interface ICustomCheckProps {
  isChecked: boolean
}

export const Container = styled.div<ICustomCheckProps>`
  border: 2px solid ${ props => props.isChecked ? '#FF8CBA' : '#E4E7EB' };
  background: ${ props => props.isChecked ? '#FFF6F9' : 'transparent' };
  width: 100%;
  padding: 21px;
  margin: 0 0 20px;
  border-radius: 4px;
  transition: .2s;

  @media only screen and (max-width: 420px) {
    padding: 20px 10px;
  }

  .ant-radio {
    display: none;
  }

  span:last-child {
    width: 100%;
    display: flex;
    align-items: center;
  }

  &:hover {
    box-shadow: 0 0 5px lightgray;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {

    &:first-child {
      display: flex;
      align-items: center;
    }

    &:last-child {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: #1F2933;

      @media only screen and (max-width: 420px) {
        font-size: 16px;
        line-height: 19px;
      }
    }
  }
`;

export const CustomCheck = styled.div<ICustomCheckProps>`
  width: 24px;
  height:24px;
  border-radius: 50%;
  border: ${ props => props.isChecked ? 0 : '2px solid #E4E7EB' } ;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 18px;

  svg {
    display: ${ props => props.isChecked ? 'block' : 'none' };
    width: 24px;
    height: 24px;
    color: #DA127D;

  }
`;

export const Cost = styled.div`
  justify-self: flex-end;
`;

export const PlanDescription = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 14px;
    line-height: 17px;
    font-weight: normal;
    color: #616E7C;
    width:80%;
    margin-bottom: 0;

    @media only screen and (max-width: 420px) {
      font-size: 13px;
      line-height: 16px;
    }

    &:first-child {
      display: flex;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #3E4C59;
      margin-bottom: 7px;

      span {
        margin: 0 4px;
      }
    }
  }
`;
