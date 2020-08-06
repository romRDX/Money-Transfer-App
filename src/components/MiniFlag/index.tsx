import React from 'react';
import { Container } from './styles';

interface MiniFlagProps {
  flag: string;
  flagName: string;
  size: number;
}

const MiniFlag: React.FC<MiniFlagProps> = ({flag, flagName, size}) => (
  <Container size={size}>
    <img src={flag} alt={flagName} />
  </Container>
);

export default MiniFlag;
