import React from 'react';

import { useAuth } from 'src/hooks/auth';

import Navigation from '../Navigation';

import {
  Container,
  UserData,
  UserPicture,
  UserName,
  UserCode,
} from './styles';

const SideBar: React.FC = () => {

  const { user } = useAuth();

  return (
    <Container>

      <UserData>
        <UserPicture src={user.avatar} />
        <div>
          <UserName>{user.name}</UserName>
          <UserCode>{user.id}</UserCode>
        </div>
      </UserData>

      <Navigation />
    </Container>
  );
};

export default SideBar;
