import { renderHook, act } from '@testing-library/react-hooks';
import { useTransfer, TransferProvider } from 'src/hooks/transfer';
import { useToast } from 'src/hooks/toast';

const mockedAddAlert = jest.fn();

jest.mock('../../hooks/toast', () => {
  return {
    useToast: () => ({
      addAlert: mockedAddAlert,
      addToast: jest.fn(),
    }),
  };
});

describe('Transfer Hook', () => {
  it('Should be able to use Transfer hook', () => {
    const { result } = renderHook(() => useTransfer(), {
      wrapper: TransferProvider,
    });

    expect(typeof result.current.confirmTransfer).toBe('function');
    expect(typeof result.current.setTransfer).toBe('function');
    expect(typeof result.current.planOptions).toBe('object');
    expect(typeof result.current.transfer).toBe('object');
  });

  it('Should be able to confirm and validate a transfer', () => {

    const { result } = renderHook(() => useTransfer(), {
      wrapper: TransferProvider,
    });

    act(() => {
      result.current.confirmTransfer();
    });

    expect(mockedAddAlert).toHaveBeenCalled();
  });
});
