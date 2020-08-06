import React from 'react';

import Toast from './Toast';

import { useToast } from '../../hooks/toast';
import { Container } from './styles';

interface ToastContainerProps {
  className?: string;
}

const ToastContainer: React.FC<ToastContainerProps> = ({ ...rest }) => {

  const { messages } = useToast();

  return (
    <Container data-testid='toastContainer' {...rest}>
      { messages && messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
