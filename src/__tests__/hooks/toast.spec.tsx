import { renderHook, act } from '@testing-library/react-hooks';
import { wait, waitFor } from '@testing-library/react';
import { useToast, ToastProvider, AlertMessage } from 'src/hooks/toast';
import { uuid } from 'uuidv4';

const uuidSpy = {
  uuid,
};

describe('Toast Hook', () => {
  it('Should be able to use Toast hook', () => {
    const { result } = renderHook(() => useToast(), {
      wrapper: ToastProvider,
    });

    expect(typeof result.current.addToast).toBe('function');
    expect(typeof result.current.removeToast).toBe('function');
    expect(typeof result.current.addAlert).toBe('function');
    expect(typeof result.current.removeAlert).toBe('function');
  });

  it('Should be able to add toast message', async () => {
    const { result } = renderHook(() => useToast(), {
      wrapper: ToastProvider,
    });

    const mockAddToast = jest.spyOn(result.current, 'addToast');

    act(() => {
      result.current.addToast({
        type: "success",
        description: 'add-toast-test-description',
        code: 'add-toast-test-code',
      });
    });

    expect(mockAddToast).toHaveBeenCalledTimes(1);
    expect(result.error).toBeUndefined();
  });

  it('should be able to remove toast message manually', () => {
    const { result } = renderHook(() => useToast(), {
      wrapper: ToastProvider,
    });

    jest.spyOn(uuidSpy, 'uuid').mockImplementation(() => '1');

    const mockRemoveToast = jest
      .spyOn(result.current, 'removeToast')
      .mockImplementation(() => '1');

    act(() => {
      result.current.addToast({
        type: 'success',
        description: 'Toast Test',
        code: 'fake-code',
      });

      result.current.removeToast('1');
    });

    expect(mockRemoveToast).toHaveBeenCalledTimes(1);
    expect(result.error).toBeUndefined();
  });

  it('Should be able to add alert message', async () => {
    const { result } = renderHook(() => useToast(), {
      wrapper: ToastProvider,
    });

    const mockAddToast = jest.spyOn(result.current, 'addAlert');

    act(() => {
      result.current.addAlert({
        type: "success",
        title: 'test-alert-message',
        message: 'test-alert-message',
        active: true,
      });
    });

    expect(mockAddToast).toHaveBeenCalledTimes(1);
    expect(result.error).toBeUndefined();
  });

  it('should be able to remove alert message manually', () => {
    const { result } = renderHook(() => useToast(), {
      wrapper: ToastProvider,
    });

    jest.spyOn(uuidSpy, 'uuid').mockImplementation(() => '1');

    const mockRemoveToast = jest
      .spyOn(result.current, 'removeAlert')
      .mockImplementation(() => '1');

    act(() => {
      result.current.addAlert({
        type: "success",
        title: 'test-alert-message',
        message: 'test-alert-message',
        active: true,
      });

      result.current.removeAlert();
    });

    expect(mockRemoveToast).toHaveBeenCalledTimes(1);
    expect(result.error).toBeUndefined();
  });
});
