import React from 'react';
import { ContentProvider } from './content';
import { AuthProvider } from './auth';
import { TransferProvider } from './transfer';
import { CountriesProvider } from './countries';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>
  <ContentProvider>
  <AuthProvider>
  <TransferProvider>
  <CountriesProvider>
    {children}
  </CountriesProvider>
  </TransferProvider>
  </AuthProvider>
  </ContentProvider>
  </ToastProvider>
);

export default AppProvider;
