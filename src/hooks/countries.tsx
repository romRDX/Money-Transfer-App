import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import countriesApi from 'src/services/countriesApi';

export interface ICountry {
  flag: string,
  id: string,
  label: string,
  value: string,
}

interface CountriesContextData {
  countries: ICountry[];
  getCountryById(id: string): ICountry | undefined;
}

const CountriesContext = createContext<CountriesContextData>({} as CountriesContextData);

export const CountriesProvider: React.FC = ({ children }) => {
  const [ countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    countriesApi.get('/currencies').then((response) => {
      setCountries(response.data);
    });
  }, []);

  const getCountryById = useCallback((id: string) => {
    return countries.find( country => country.id === id);
  },[countries]);

  return (
    <CountriesContext.Provider
      value={{ countries, getCountryById }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export function useCountries(): CountriesContextData {
  const context = useContext(CountriesContext);

  return context;
}
