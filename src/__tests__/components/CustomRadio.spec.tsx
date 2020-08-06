import React from 'react';
import { render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import CustomRadio from 'src/components/CustomRadio';

describe('CustomRadio Component', () => {

  it('Should be able to render CustomRadio component', async () => {

    const { getByText, getByTestId } = render(<CustomRadio isChecked={false} value={'Express'} cost={1.00} />);

    expect(getByTestId('plan-cost')).toBeTruthy();
    expect(getByText('$ 1.00')).toBeTruthy();
  });
});
