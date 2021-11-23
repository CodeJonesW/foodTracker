import * as React from 'react';
import {render} from '@testing-library/react-native';
import Food from '../components/Food';
describe('Food component', () => {
  test('Food component renders props for name and calories', () => {
    const consumption1 = {
      name: 'cheesecake',
      calories: '1000',
    };
    const deleteConsumption = jest.fn();

    const {getByTestId} = render(
      <Food consumption={consumption1} deleteConsumption={deleteConsumption} />,
    );
    expect(getByTestId('consumptionName').props.children).toBe('cheesecake');
    expect(getByTestId('consumptionCalories').props.children).toBe('1000');
  });
});
