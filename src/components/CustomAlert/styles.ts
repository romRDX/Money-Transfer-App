import styled from 'styled-components';
import { lighten } from 'polished';

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: ${ props => props.isActive ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 420px) {
    position: fixed;
  }
`;

export const Content = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 420px;
  background: #FFF;
  height: fit-content;
  padding: 20px 0;
  border-radius: 15px;
  opacity: 1;
  position: relative;

  color: black;

  span {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
    text-align: center;
    color: #F364A2;
  }

  div {
    border-top: 2px solid #E4E7EB;
    padding-top: 15px;

    pre {
      padding: 0 20px;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;

  border: 0;
  outline: 0;
  background: transparent;

  svg {
    width: 32px;
    height: 32px;
    color: #F364A2;
  }
`;

export const Background = styled.div`
position: absolute;
  width: 100%;
  height: 100%;
  background: ${ lighten(0.2, 'black')};
  opacity: 0.3;
`;
