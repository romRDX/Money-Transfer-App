import React from 'react';
import { render, fireEvent, act, wait, waitFor } from '@testing-library/react';
import PlanSelector from 'src/components/PlanSelector';

jest.mock('../../hooks/transfer', () => {
  return {
    useTransfer: () => ({
      setTransfer: jest.fn(),
      transfer: {
        sentAt: undefined,
        plan: 'Express',
        sent: 10,
        received: 20,
        initialCurrency: 'BRL',
        toConvertCurrency: 'USD',
      }
    }),
  };
});

describe('PlanSelector Component', () => {

  it('Should be able to render PlanSelector component', async () => {

    const { getByText } = render(<PlanSelector />);

    expect(getByText('Choose a plan:')).toBeTruthy();
  });

  it('Should be able to select a plan', async () => {

    const { getByText, getByTestId } = render(<PlanSelector />);

    await act(async () => {
      fireEvent.click(getByText('Express'));
    });
  });

  // it('Should be able to select a date', async () => {

  //   const { getByText, getByPlaceholderText } = render(<PlanSelector />);

  //   const inputElement = getByPlaceholderText('Select date');

  //   await act(async () => {
  //     fireEvent.change(inputElement, {
  //       target: { value: '12/12/2025' },
  //     });
  //   });

  //   await act(async () => {
  //     fireEvent.blur(inputElement);
  //   });

  //   await act(async () => {
  //     fireEvent.click(getByText('Choose a plan'));
  //   });

  //   await wait(() => {
  //     expect(getByText('12')).toBeTruthy();
  //     expect(getByText('December')).toBeTruthy();
  //   });
  // });

});
