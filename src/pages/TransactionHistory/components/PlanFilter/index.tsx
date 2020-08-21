import React, { } from 'react';

import Select from 'react-select';

import { Container } from './styles';

interface PlanFilterProps {
  onChange(data): void;
}

const PlanFilter: React.FC<PlanFilterProps> = ({ onChange }) => {

  const planOptions = [
    { value: 'All', label: 'All' },
    { value: 'Express', label: 'Express' },
    { value: 'Standard', label: 'Standard' },
    { value: 'WorkingDays', label: 'WorkingDays'}
  ];

  const selectStyles = {
    container: styles => ({ ...styles, width: '55%', fontSize: '14px' }),
    control: styles => ({ ...styles, backgroundColor: 'white', border: '0', minHeight: '20px' }),
    dropdownIndicator: styles => ({ ...styles, display: 'none' }),
    placeholder: styles => ({ ...styles,  }),
    indicatorSeparator: styles => ({ ...styles, display: 'none' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {

      return {
        ...styles,
        border: '0',
        backgroundColor: 'transparent',
        color: 'black',
      };
    },
  };

  return (
    <Container>
      <span>Plan</span>
      <Select
        onChange={(data)=> data ? onChange(data) : {}}
        defaultValue={planOptions[0]}
        options={planOptions}
        styles={selectStyles}
      />
    </Container>
  );
};

export default PlanFilter;
