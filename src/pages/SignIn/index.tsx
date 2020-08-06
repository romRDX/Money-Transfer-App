import React from 'react';
import { Link } from 'react-router-dom';

import { DoubleArrow } from '@material-ui/icons';

import logoImg from '../../assets/logo.png';

import { Container, Content, Background, TradeMark } from './styles';

const SignIn: React.FC = () => {

  return (
    <Container>
      <Content>
        <TradeMark>
          <img src={logoImg} alt="BookSelf" />
          <h2>BookShelf</h2>
        </TradeMark>

        <Link to="/dashboard">
          <DoubleArrow />
          <p>Log In</p>
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
