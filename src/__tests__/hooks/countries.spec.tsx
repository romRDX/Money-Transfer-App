import { renderHook, act } from '@testing-library/react-hooks';
import { useCountries, CountriesProvider } from 'src/hooks/countries';
import MockAdapter from 'axios-mock-adapter';
import api from '../../services/countriesApi';

const apiMock = new MockAdapter(api);

describe('Countries Hook', () => {
  it('Should be able to use Countries hook', () => {
    const { result } = renderHook(() => useCountries(), {
      wrapper: CountriesProvider,
    });

    const apiResponse = [{}, {}];

    apiMock.onGet('currencies').reply(200, apiResponse);

    expect(Array.isArray(result.current.countries)).toBe(true);
  });
});
