import React, { createContext, useCallback, useContext } from 'react';

import {  useHistory } from 'react-router-dom';

// import loginApi from '../services/loginApi';

interface User {
  id: string;
  name: string;
  balance: number;
  avatar: string;
}

interface AuthContextData {
  user: User;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();

  const user = {
    name: 'Rômullo S.A.S.',
    id: '2312T45B',
    avatar: 'https://avatars2.githubusercontent.com/u/42154097?s=460&u=a0ffda0712617880951aa532207bbf34870c3118&v=4',
    balance: 50000.00,
  }

  const signOut = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <AuthContext.Provider
      value={{ user, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
