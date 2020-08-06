import { renderHook } from '@testing-library/react-hooks';
import { useContent, ContentProvider } from 'src/hooks/content';

describe('Content Hook', () => {
  it('Should be able to use Content hook', () => {
    const { result } = renderHook(() => useContent(), {
      wrapper: ContentProvider,
    });

    expect(typeof result.current.selectedContent).toBe('string');
    expect(typeof result.current.setSelectedContent).toBe('function');
  });
});
