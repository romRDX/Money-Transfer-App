import React from 'react';
import { useAuth } from 'src/hooks/auth';

import Converter from 'src/components/Converter';
import Details from 'src/components/Details';
import PlanSelector from 'src/components/PlanSelector';

import { Container, Content, OptionTitle, Balance } from './styles';

const SendMoney: React.FC = () => {

  const { user } = useAuth();

  return (
    <Container>
      <Content>
        <OptionTitle>Send Money</OptionTitle>
        <Balance><span>{user.balance.toLocaleString('en-US')}</span> available</Balance>
        <Converter></Converter>
        <PlanSelector />
      </Content>
      <Details />
    </Container>
  );
};

export default SendMoney;
