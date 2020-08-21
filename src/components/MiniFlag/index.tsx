import React, { useState, useEffect } from 'react';
import { Container } from './styles';

import { useCountries, ICountry } from 'src/hooks/countries';

interface MiniFlagProps {
  id: string;
  size: number;
}

const MiniFlag: React.FC<MiniFlagProps> = ({id,  size}) => {
  const { getCountryById } = useCountries();

  const [ selectedCountry, setSelectedCountry] = useState<ICountry>({} as ICountry);

  useEffect(()=>{
    const country = getCountryById(id);
    if(country){
      setSelectedCountry(country);
    }
  },[id, getCountryById]);

  return (
    <Container size={size} backgroundImg={selectedCountry?.flag} />
  );
};

export default MiniFlag;
