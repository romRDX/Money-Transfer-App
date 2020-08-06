import React from 'react';
import { render, fireEvent, wait, waitFor, act } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import SendMoney from 'src/pages/SendMoney';

jest.mock('../../hooks/content', () => {
  return {
    useContent: () => ({
      selectedContent: 'fake-data',
    }),
  };
});

jest.mock('../../hooks/toast', () => {
  return {
    useToast: () => ({
      alert: {
        active: true,
        removeAlert: jest.fn(),
      },
    }),
  };
});

jest.mock('../../hooks/transfer', () => {
  return {
    useTransfer: () => ({
      transfer: {
        sent: 0,
        received: 0,
      },
      setTransfer: jest.fn(),
    }),
  };
});

jest.mock('../../hooks/countries', () => {
  return {
    useCountries: () => ({
      countries: [],
    }),
  };
});

jest.mock('../../hooks/auth', () => {
  return {
    useAuth: () => ({
      user: {
        avatar: 'fake-avatar',
        name: 'Rômullo S.A.S.',
        id: '2312T45B',
        balance: 50000,
      }
    }),
  };
});

describe('SendMoney Page', () => {

  it('Should be able to render SendMoney page', async () => {

    const { getByText } = render(<SendMoney />);

    expect(getByText('Send Money')).toBeTruthy();
  });
});
