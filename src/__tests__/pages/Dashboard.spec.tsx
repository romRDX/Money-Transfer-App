import React from 'react';
import { render, fireEvent, wait, waitFor, act } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import Dashboard from 'src/pages/Dashboard';

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

describe('Dashboard Page', () => {

  it('Should be able to render Dashboard page', async () => {

    const { getByText } = render(<Dashboard />);

    expect(getByText('Rômullo S.A.S.')).toBeTruthy();
    expect(getByText('2312T45B')).toBeTruthy();
  });
});
