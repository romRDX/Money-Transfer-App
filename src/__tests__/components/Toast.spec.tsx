import React from 'react';
import { render, fireEvent, act, wait, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import Toast from 'src/components/ToastContainer/Toast';

import { ToastMessage } from 'src/hooks/toast';

const fakeRemoveToast = jest.fn();

jest.mock('../../hooks/toast', () => {
  return {
    useToast: () => ({
      removeToast: fakeRemoveToast,
    }),
  };
});

const fakeMessage = {
  id: 'fake-id',
  description: 'fake-description',
  type: "success",
  code: 'fake-code',
} as ToastMessage;

describe('Toast Component', () => {

  it('Should be able to render Toast component', async () => {

    const { getByText } = render(<Toast message={fakeMessage} />);

    expect(getByText('fake-description')).toBeTruthy();
  });

  it('Should be able to close an alert message', async () => {

    const { getByTestId } = render(<Toast message={fakeMessage} />);

    const removeToastButton = getByTestId('remove-toast-button');

    await act(async () => {
      fireEvent.click(removeToastButton);
    });

    await wait(() => {
      expect(fakeRemoveToast).toHaveBeenCalledWith('fake-id');
    });
  });
});
