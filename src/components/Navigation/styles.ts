import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  svg {
    width: 22px;
    height: 22px;
    color: black;
    margin-right: 14px;
    transition: color .3s;
  }

  div {

  }

  > button {
    color: black;
    align-self: flex-end;
    border: 0;
    outline: 0;
    background: transparent;
    margin-top: 80px;
    display: none;

    @media only screen and (max-width: 1260px) {
      display: flex;
    }

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const UserPicture = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 19px;
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


interface NavMenuProps {
  isOpen?: boolean
}

export const NavMenu = styled.div<NavMenuProps>`
  width: 100%;
  box-sizing: border-box;
  color: black;
  transition: 0.3s;

  @media only screen and (max-width: 1260px) {
    width: 200px;
    z-index: 2;
    background: #FFF;
    justify-content: flex-end;
    position: absolute;
    right: 16px;
    top: 110px;
    height: ${ props => props.isOpen ? '540' : '1'}px;
    overflow: hidden;
    border: ${ props => props.isOpen ? '.5px solid #E8368F' : '0'};
    box-sizing: border-box;
  }

  &:first-child {
    margin-bottom: 200px;

    @media only screen and (max-width: 1260px) {
      margin: 70px 0 19px 0;
    }
  }
`;


interface NavButtonProps {
  isSelected?: boolean
}

export const NavButton = styled.button<NavButtonProps>`
  box-sizing: border-box;
  background: transparent;
  border: 0;
  border-left: 6px solid transparent;
  margin: 5px 0;
  padding: 15px 0 15px 50px;
  width: 100%;
  display: flex;
  align-items: center;

  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.015em;
  color: #1F2933;

  ${(props) =>
    props.isSelected &&
    css`
      border-left: 6px solid #E8368F;
  `}

  transition: .3s;

  &:hover {
    padding-left: 60px;

    @media only screen and (max-width: 1260px) {
      padding-left: 50px;
    }

    svg {
      color: #E8368F;
    }
  }

  &:last-child {

    svg {
      transform: scaleX(-1);
    }
  }
`;

export const ExtraButtons = styled.div<NavMenuProps>`
  display: ${ props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;

  button {

    svg {
      width: 20px;
      height: 20px;
      color: #1F2933;
      transform: scaleX(1) !important;
    }
  }
`;
