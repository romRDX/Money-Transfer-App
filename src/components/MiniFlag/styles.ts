import styled from 'styled-components';

interface ContainerProps {
  size: number;
}

export const Container = styled.div<ContainerProps>`
  width: ${ props => props.size}px;
  height: ${ props => props.size}px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* margin-left: 15px; */

  img {
    width: ${ props => props.size * 1.6}px;
    height: ${ props => props.size * 1.6}px;
    border: 0;
    align-self: center;
    justify-self: end;
  }
`;
