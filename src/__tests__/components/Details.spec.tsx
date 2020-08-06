import React from 'react';
import { render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import Details from 'src/components/Details';
import { useTransfer } from 'src/hooks/transfer';

jest.mock('src/hooks/transfer', () => {
  return {
    useTransfer: () => ({
      transfer: {
        sent: 10,
        received: 20,
        plan: 'Express',
        sentAt: new Date( Date.now()),
        initialCurrency: 'fake-data',
        initialCurrencyFlag: 'fake-data',
        toConvertCurrency: 'fake-data',
        toConvertCurrencyFlag: 'fake-data',
      },
      confirmTransfer: jest.fn(),
      planOptions: {
        Express: 12
      },
    }),
  };
});

describe('Details Component', () => {

  it('Should be able to render Details component', async () => {

    const { getByText } = render(<Details />);

    expect(getByText('Payment Details')).toBeTruthy();
  });
});
