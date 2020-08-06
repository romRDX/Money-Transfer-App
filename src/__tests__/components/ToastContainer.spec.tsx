import React from 'react';
import { render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import ToastContainer from 'src/components/ToastContainer';

jest.mock('../../hooks/toast', () => {
  return {
    useToast: () => ({
      alert: {
        active: true,
        removeAlert: jest.fn(),
      },
      messages: [{
        id: 'fake-data',
        description: 'fake-data',
      }],
    }),
  };
});

describe('ToastContainer Component', () => {

  it('Should be able to render ToastContainer component', async () => {

    const { getByTestId } = render(<ToastContainer />);

    const container = getByTestId('toastContainer');

    expect(container).toBeTruthy();
  });
});
