import React from 'react';
import { useContent } from 'src/hooks/content';

import CustomAlert from 'src/components/CustomAlert';
import SideBar from 'src/components/SideBar';

import SendMoney from '../SendMoney';
import TransactionHistory from '../TransactionHistory';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { selectedContent } = useContent();

  return (
    <Container>
      <SideBar />

      { selectedContent === 'SendMoney' && <SendMoney /> }
      { selectedContent === 'History' && <TransactionHistory /> }

      <CustomAlert />
    </Container>
  );
};

export default Dashboard;
