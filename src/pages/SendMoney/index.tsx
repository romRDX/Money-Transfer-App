import React from 'react';
import { useAuth } from 'src/hooks/auth';

import Converter from 'src/components/Converter';
import Details from 'src/components/Details';
import PlanSelector from 'src/components/PlanSelector';
import InfoButtons from 'src/components/InfoButtons';

import { Container, Header, Content, MainContent, OptionTitle, Balance } from './styles';

const SendMoney: React.FC = () => {

  const { user } = useAuth();

  return (
    <Container>

      <Header>
        <div>
          <OptionTitle>Send Money</OptionTitle>
          <Balance><span>{user.balance.toLocaleString('en-US')}</span> available</Balance>
        </div>
        <InfoButtons />
      </Header>

      <Content>
        <MainContent>
          <Converter />
          <PlanSelector />
        </MainContent>
        <Details />
      </Content>

    </Container>
  );
};

export default SendMoney;
