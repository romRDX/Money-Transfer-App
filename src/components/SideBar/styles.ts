import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 300px;
  position: relative;
  padding-right: 15px;

  @media only screen and (max-width: 1260px) {
    display: flex;
    max-width: 90%;
    margin: 0 auto;
    justify-content: space-between;
  }

  @media only screen and (max-width: 1070px) {
    max-width: 720px;
  }
`;

export const UserData = styled.div`
  margin: 70px 0 19px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1260px) {
    flex-direction: row;
    margin-left: 21px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 1260px) {
      align-items: flex-start;
    }
  }
`;

export const UserPicture = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;

  @media only screen and (max-width: 1260px) {
    margin-right: 16px;
  }
`;

export const UserName = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #1F2933;
  margin-top: 7px;
`;

export const UserCode = styled.span`
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #616E7C;
`;
