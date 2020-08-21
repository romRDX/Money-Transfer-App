import React, { } from 'react';

import PlanFilter from '../PlanFilter';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { Container, FilterOption } from './styles';

interface TransactionFiltersProps {
  filterOrder: string;
  selectedFilter: string;
  handleFilter(filter: string): void;
  handlePlanFilterChange(filter: string): void;
}

const TransactionFilters: React.FC<TransactionFiltersProps> = ({ filterOrder, selectedFilter, handleFilter, handlePlanFilterChange }) => {

  return (
    <Container>
      <FilterOption isSelected={ selectedFilter === 'DATE'} onClick={()=> handleFilter('DATE')}>
        Date
        { selectedFilter === 'DATE' && filterOrder === 'ASC' && <FiChevronUp />  }
        { selectedFilter === 'DATE' && filterOrder === 'DESC' && <FiChevronDown />  }
      </FilterOption>
      <FilterOption isSelected={ selectedFilter === 'VALUE'} onClick={()=> handleFilter('VALUE')}>
        Sent Value
        { selectedFilter === 'VALUE' && filterOrder === 'ASC' && <FiChevronUp />  }
        { selectedFilter === 'VALUE' && filterOrder === 'DESC' && <FiChevronDown />  }
      </FilterOption>
      <PlanFilter onChange={(data) => handlePlanFilterChange(data.value)} />
    </Container>
  );
};

export default TransactionFilters;
