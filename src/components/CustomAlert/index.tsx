import React, { } from 'react';

import { useToast } from 'src/hooks/toast';

import { AiFillCloseCircle } from 'react-icons/ai';

import {
  Container,
  Content,
  Background,
  CloseButton,
} from './styles';

const CustomAlert: React.FC = () => {
  const { alert, removeAlert } = useToast();

  return (
    <Container isActive={alert.active}>
      <Content>
          <span>{alert.title}</span>
          <div>
            <pre>
              <code>
                { alert.message }
              </code>
            </pre>
          </div>
        <CloseButton onClick={removeAlert}>
          <AiFillCloseCircle />
        </CloseButton>
      </Content>

      <Background onClick={removeAlert} />
    </Container>
  );
};

export default CustomAlert;
