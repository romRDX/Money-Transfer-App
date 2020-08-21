import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 300px;
  position: relative;

  animation: sideBarAnimation .8s, 'fadeIn' .8s;

  @keyframes sideBarAnimation {
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

  @media only screen and (max-width: 1260px) {
    display: flex;
    max-width: 90%;
    margin: 0 auto;
    justify-content: space-between;
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
  color: var(--gray-5);
  margin: 7px 0;
`;

export const UserCode = styled.span`
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: var(--gray-2);
`;
