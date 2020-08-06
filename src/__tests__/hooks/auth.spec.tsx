import { renderHook } from '@testing-library/react-hooks';
import { useAuth, AuthProvider } from 'src/hooks/auth';

describe('Auth Hook', () => {
  it('Should be able to use Auth hook', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    expect(typeof result.current.signOut).toBe('function');
    expect(typeof {value: result.current.user}).toBe('object');
  });
});
