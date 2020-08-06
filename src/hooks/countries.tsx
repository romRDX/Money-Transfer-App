import React, { createContext, useState, useContext, useEffect } from 'react';
import countriesApi from 'src/services/countriesApi';

export interface ICountry {
  flag: string,
  id: string,
  label: string,
  value: string,
}

interface CountriesContextData {
  countries: ICountry[];
}

const CountriesContext = createContext<CountriesContextData>({} as CountriesContextData);

export const CountriesProvider: React.FC = ({ children }) => {
  const [ countries, setCountries] = useState([]);

  useEffect(() => {
    countriesApi.get('/currencies').then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <CountriesContext.Provider
      value={{ countries }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export function useCountries(): CountriesContextData {
  const context = useContext(CountriesContext);

  return context;
}
