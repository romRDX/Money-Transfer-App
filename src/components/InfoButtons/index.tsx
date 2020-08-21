import React, { } from 'react';

import { FiFileText, FiHelpCircle } from 'react-icons/fi';

import {
  Container,
} from './styles';

const InfoButtons: React.FC = () => {

  return (
    <Container>
      <div>
        <FiFileText />
      </div>
      <div>
        <FiHelpCircle />
      </div>
    </Container>
  );
};

export default InfoButtons;
