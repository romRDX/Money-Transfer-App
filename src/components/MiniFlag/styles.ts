import styled from 'styled-components';

interface ContainerProps {
  size: number;
  backgroundImg: string;
}

export const Container = styled.div<ContainerProps>`
  width: ${ props => props.size}px;
  height: ${ props => props.size}px;
  background-image: url('${ props => props.backgroundImg}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${ props => props.size * 1.7}px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
