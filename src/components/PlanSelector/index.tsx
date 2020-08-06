import React, { useState, useCallback, useEffect } from 'react';

import { useTransfer } from 'src/hooks/transfer';

import { DatePicker, Radio } from 'antd';

import CustomRadio from '../CustomRadio';

import {
  Container,
  DatePickerContainer,
} from './styles';

const PlanSelector: React.FC = () => {
  const { setTransfer } = useTransfer();

  const [ selectedDate, setSelectedDate] = useState<Date>(new Date( Date.now()) );
  const [ selectedPlan, setSelectedPlan] = useState<string>('');

  useEffect(()=>{
    setTransfer( state => {
      return {
        ...state,
        sentAt: selectedDate,
        plan: selectedPlan,
      }
    });
  },[selectedDate, selectedPlan, setTransfer]);

  const handleDateChange = useCallback((obj) => {
    if(obj){
      const newDate = new Date(obj._d.toDateString());
      setSelectedDate(newDate);
    }
  }, []);

  const handleSelectPlan = useCallback((e) => {
    setSelectedPlan(e.target.value);
  }, []);

  return (
    <Container>
      <div>
        <p>Choose a plan:</p>
        <DatePickerContainer>
          <span>Choose the date: </span>
          <DatePicker
            bordered={false}
            onChange={(data) => handleDateChange(data)}
            format='DD/MM/YYYY'
          />
        </DatePickerContainer>
      </div>
      <div>
        <Radio.Group onChange={(data) => handleSelectPlan(data)} >
          <CustomRadio data-testid='Express-plan' value='Express' isChecked={selectedPlan === 'Express'} cost={0.99}>
            { selectedDate &&
              <p>Get <span> {selectedDate.getDate()} {selectedDate.toLocaleString('en-US', { month: 'long' })} </span> till 12pm </p>
            }
            <p>Express</p>
          </CustomRadio>

          <CustomRadio value='Standard' isChecked={selectedPlan === 'Standard'} cost={1.00}>
            { selectedDate &&
              <p>Get <span> {selectedDate.getDate()} {selectedDate.toLocaleString('en-US', { month: 'long' })} </span> till 6pm  </p>
            }
            <p>Standard</p>
          </CustomRadio>

          { selectedDate.getDate() === new Date(Date.now()).getDate() &&
            <CustomRadio value='WorkingDays' isChecked={selectedPlan === 'WorkingDays'} cost={1.00}>
              <p>Get today till 8pm </p>
              <p>Only on working days from 11am to 8pm</p>
            </CustomRadio>
          }
        </Radio.Group>
      </div>
    </Container>
  );
};

export default PlanSelector;
