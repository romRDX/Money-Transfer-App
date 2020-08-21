import React, { useEffect, useState, useMemo, useCallback } from 'react';

import * as api from 'src/services/transactionsAPI';
import { ITransferRecord } from 'src/services/transactionsAPI';

import orderBy from 'src/utils/orderBy';
import filterBy from 'src/utils/filterBy';

import Transfer from './components/Transfer';
import TransactionsFilters from './components/TransactionFilters';

import {
  Container,
  TransactionsList,
} from './styles';

import { animated, useTrail } from 'react-spring'

const TransactionHistory: React.FC = () => {
  const [ transactions, setTransactions] = useState<ITransferRecord[]>([]);
  const [ selectedFilter, setSelectedFilter ] = useState<string>('DATE');
  const [ filterOrder, setFilterOrder ] = useState<string>('ASC');
  const [ planFilter, setPlanFilter ] = useState<string>('All');

  useEffect(() => {
    const transactions = api.get();

    if(transactions){
      setTransactions(transactions);
    }
  },[]);

  const handleFilter = useCallback((filter: string) => {
    if(filter === selectedFilter){
      setFilterOrder( state => state === 'ASC' ? 'DESC' : 'ASC');

    } else {
      setSelectedFilter(filter);
      setFilterOrder('ASC');
    }
  },[selectedFilter]);

  const filteredTransactions = useMemo(()=>{
    let filteredTransactions = transactions;
    if(planFilter !== 'All' ){
      filteredTransactions = filterBy(transactions, planFilter);
    }
    return orderBy(filteredTransactions, selectedFilter, filterOrder);
  },[transactions, filterOrder, selectedFilter, planFilter]);

  const handlePlanFilterChange = useCallback((data: string)=>{
    setPlanFilter(data);
  },[]);

  const transitions = useTrail(filteredTransactions.length, {
    opacity: 1,
    y: 0,
    left: 50,
    from: { opacity: 0, y: 40, left: 0 },
  })

  return (
    <Container>
      <span>Transactions History</span>
      <TransactionsFilters
        filterOrder={filterOrder}
        selectedFilter={selectedFilter}
        handleFilter={handleFilter}
        handlePlanFilterChange={handlePlanFilterChange}
      />
      <TransactionsList>

        {/* {
          filteredTransactions.map((transac: ITransferRecord) => (
            <Transfer key={transac.id} transfer={transac} />
          ))
        } */}

        {
          transitions.map(({ y, left, ...rest }, index) =>
            <animated.div
            key={filteredTransactions[index].id}
            className="trails-text"
            style={{ ...rest, transform: y.interpolate(y => `translate3d(-${y}px,0,0)`) }}>
              <animated.div style={{ left }}>
                <Transfer key={filteredTransactions[index].id} transfer={filteredTransactions[index]} />
              </animated.div>
            </animated.div>
          )
        }
      </TransactionsList>
    </Container>
  );
};

export default TransactionHistory;
