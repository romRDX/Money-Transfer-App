import React, { } from 'react';

import { FaCheckCircle } from 'react-icons/fa';
import { Radio } from 'antd';

import {
  Container,
  Content,
  CustomCheck,
  PlanDescription,
  Cost,
} from './styles';

interface CustomRadioProps {
  isChecked: boolean;
  value: string;
  cost: number;
}

const CustomRadio: React.FC<CustomRadioProps> = ({ children, value, cost, isChecked }) => {

  return (
    <Container isChecked={isChecked}>
      <Radio  value={value}>
        <Content>
          <div>
            <CustomCheck isChecked={isChecked}>
            <FaCheckCircle />
            </CustomCheck>
            <PlanDescription>
              { children }
            </PlanDescription>
          </div>

          <Cost data-testid="plan-cost">$ {cost.toFixed(2)}</Cost>
        </Content>
      </Radio>
    </Container>
  );
};

export default CustomRadio;
