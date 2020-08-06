import React from 'react';
import { render, fireEvent, wait, waitFor, act } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import Converter from 'src/components/Converter';

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

jest.mock('../../hooks/countries', () => {
  return {
    useCountries: () => ({
      countries: [],
    }),
    ICountry: '',
  };
});

describe('Converter Component', () => {

  it('Should be able to render Converter component', async () => {

    const { getByText } = render(<Converter />);

    expect(getByText('You send')).toBeTruthy();
    expect(getByText('Recipient gets')).toBeTruthy();
  });

  // it('Should be able to select another initial currency', async () => {

  //   const { getByText, getByTestId, getByPlaceholderText } = render(<Converter />);

  //   await act(async () => {
  //     fireEvent.click(getByText('Brazil'));
  //   });

  //   await act(async () => {
  //     fireEvent.click(getByPlaceholderText('SelectOriginCurrency'));
  //   });

  //   expect(getByText('Canada')).toBeTruthy();
  // });

  it('Should be able to switch currencies', async () => {

    const { getByText, getByTestId, getByPlaceholderText } = render(<Converter />);

    await act(async () => {
      fireEvent.click(getByTestId('switch-currencies'));
    });

    // await act(async () => {
    //   fireEvent.click(getByPlaceholderText('SelectOriginCurrency'));
    // });

    // expect(getByText('Canada')).toBeTruthy();
  });
});
