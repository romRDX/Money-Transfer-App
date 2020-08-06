import React from 'react';
import { render, act, fireEvent, wait, waitFor } from '@testing-library/react';
import Navigation from 'src/components/Navigation';

jest.mock('../../hooks/content', () => {
  return {
    useContent: () => ({
      selectedContent: 'fake-data',
      setSelectedContent: jest.fn(),
    }),
  };
});

describe('Navigation Component', () => {

  it('Should be able to render Navigation component', async () => {

    const { getByText } = render(<Navigation />);

    expect(getByText('Services')).toBeTruthy();
    expect(getByText('Transactions')).toBeTruthy();
    expect(getByText('Send Money')).toBeTruthy();
    expect(getByText('Cards')).toBeTruthy();
    expect(getByText('History')).toBeTruthy();
    expect(getByText('Settings')).toBeTruthy();
    expect(getByText('Log Out')).toBeTruthy();
  });

  it('Should be able to select services page', async () => {

    const { getByPlaceholderText } = render(<Navigation />);

    const navButton = getByPlaceholderText('ServicesPage');

    await act(async () => {
      fireEvent.click(navButton);
    });

    // await waitFor(() => {
    //   expect(navButton).toHaveStyle('border-left: 6px solid #E8368F;');
    // });
  });

  it('Should be able to select transactions page', async () => {

    const { getByPlaceholderText } = render(<Navigation />);

    const navButton = getByPlaceholderText('TransactionsPage');

    await act(async () => {
      fireEvent.click(navButton);
    });

    // await waitFor(() => {
    //   expect(navButton).toHaveStyle('border-left: 6px solid #E8368F;');
    // });
  });

  it('Should be able to select send money page', async () => {

    const { getByPlaceholderText } = render(<Navigation />);

    const navButton = getByPlaceholderText('SendMoneyPage');

    await act(async () => {
      fireEvent.click(navButton);
    });

    // await waitFor(() => {
    //   expect(navButton).toHaveStyle('border-left: 6px solid #E8368F;');
    // });
  });

  it('Should be able to select cards page', async () => {

    const { getByPlaceholderText } = render(<Navigation />);

    const navButton = getByPlaceholderText('CardsPage');

    await act(async () => {
      fireEvent.click(navButton);
    });

    // await waitFor(() => {
    //   expect(navButton).toHaveStyle('border-left: 6px solid #E8368F;');
    // });
  });

  it('Should be able to select history page', async () => {

    const { getByPlaceholderText } = render(<Navigation />);

    const navButton = getByPlaceholderText('HistoryPage');

    await act(async () => {
      fireEvent.click(navButton);
    });

    // await waitFor(() => {
    //   expect(navButton).toHaveStyle('border-left: 6px solid #E8368F;');
    // });
  });
});
