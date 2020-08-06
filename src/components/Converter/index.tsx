import React, { useState, useEffect, useCallback, useMemo } from 'react';

import { useTransfer, ITransfer } from 'src/hooks/transfer';
import { useAuth } from 'src/hooks/auth';
import { useCountries, ICountry} from 'src/hooks/countries';

import convertValue from 'src/utils/currencyConversor';

import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import MiniFlag from 'src/components/MiniFlag';
import Select from 'react-select';
import { FiRefreshCcw } from 'react-icons/fi';

import {
  Container,
  ConversionOptions,
  ValueBox,
} from './styles';

import { Brasil, UnitedStates} from './data';

const Converter: React.FC = () => {
  const { countries } = useCountries();
  const { transfer, setTransfer } = useTransfer();
  const { user } = useAuth();

  const [ toSendValue, setToSendValue] = useState(0);
  const [ selectedOriginCountry, setSelectedOriginCountry] = useState<ICountry>(Brasil);
  const [ selectedDestinationCountry, setSelectedDestinationCountry ] = useState<ICountry>(UnitedStates);

  const convertedToSendValue = useMemo(()=>{
    return convertValue(toSendValue, selectedOriginCountry.value, selectedDestinationCountry.value);
  },[toSendValue, selectedOriginCountry, selectedDestinationCountry]);

  useEffect(() => {
    setTransfer((state: ITransfer) => {
      return {
      ...state,
      sent: toSendValue,
      received: convertedToSendValue,
      initialCurrency: selectedOriginCountry.value,
      initialCurrencyFlag: selectedOriginCountry.flag,
      toConvertCurrency: selectedDestinationCountry.value,
      toConvertCurrencyFlag: selectedDestinationCountry.flag,
      }
    });
  }, [
    setTransfer,
    toSendValue,
    convertedToSendValue,
    selectedOriginCountry,
    selectedDestinationCountry,
  ])

  const handleSelectFromCurrency = useCallback((country) =>{
    setSelectedOriginCountry(country);
  }, []);

  const handleSelectToCurrency = useCallback((country) =>{
    setSelectedDestinationCountry(country);
  }, []);

  const handleChangeValue = useCallback((value) => {
    if(!value){
      setToSendValue(0);
      return;
    }
    setToSendValue(parseFloat(value));
  }, []);

  const handleSwitchCurrency = useCallback(()=>{
    const helper = selectedDestinationCountry;
    setSelectedDestinationCountry(selectedOriginCountry);
    setSelectedOriginCountry(helper);
  },[selectedDestinationCountry, selectedOriginCountry]);

  return (
    <Container>
      <div>
        <ConversionOptions>
            <span>From:</span>
            { selectedOriginCountry &&
              <MiniFlag
                flag={selectedOriginCountry.flag}
                flagName={selectedOriginCountry.label}
                size={20}
              />
            }
            <Select
              value={selectedOriginCountry}
              className='react-select-container'
              classNamePrefix="react-select"
              placeholder="SelectOriginCurrency"
              options={countries.filter((country) => country.id !== selectedDestinationCountry.id)}
              onChange={handleSelectFromCurrency}
            />
        </ConversionOptions>

        <ValueBox>
          <p>You send</p>
          <span>
            <CurrencyTextField
              variant="standard"
              value={toSendValue}
              maximumValue={user.balance.toString()}
              decimalPlaces={2}
              outputFormat="string"
              currencySymbol=''
              decimalCharacter="."
		          digitGroupSeparator=","
              onChange={(event, value)=> handleChangeValue(value)}
            /> <p>{selectedOriginCountry.value}</p>
          </span>
        </ValueBox>

      </div>
      <FiRefreshCcw data-testid="switch-currencies" onClick={handleSwitchCurrency} />
      <div>

        <ConversionOptions>
          <span>To:</span>
          { selectedDestinationCountry &&
            <MiniFlag
              flag={selectedDestinationCountry.flag}
              flagName={selectedDestinationCountry.label}
              size={20}
            />
          }
          <Select
            value={selectedDestinationCountry}
            className='react-select-container'
            classNamePrefix="react-select"
            placeholder="SelectDestinationCurrency"
            options={countries.filter((country) => country.id !== selectedOriginCountry.id)}
            onChange={handleSelectToCurrency}
          />
        </ConversionOptions>

        <ValueBox>
          <p>Recipient gets</p>
          <span><b>{convertedToSendValue}</b><p>{transfer.toConvertCurrency}</p></span>
        </ValueBox>
      </div>

    </Container>
  );
};

export default Converter;
