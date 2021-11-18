import * as React from 'react';
import {getByTestId, screen} from '@testing-library/dom';
import {render, fireEvent} from '@testing-library/react-native';
import userEvent from '@testing-library/user-event';
import Food from '../components/Food';
import WhatDidYouEat from '../screens/WhatDidYouEat';
/**
 * @jest-environment jsdom
 */
const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});
describe('WhatDidYouEat screen', () => {
  test('user can save a consumption', () => {
    let props: any;
    props = createTestProps({});
    const {getByText, getByTestId} = render(<WhatDidYouEat {...props} />);

    fireEvent.changeText(getByTestId('foodNameInput'), 'cheesecake');
    fireEvent.changeText(getByTestId('calorieInput'), '1000');
    fireEvent.press(getByText('Munch'));

    expect(getByTestId('consumptionName')?.children[0]).toEqual('cheesecake');
    expect(getByTestId('consumptionCalories')?.children[0]).toEqual('1000');
  });
  test('user can add and then delete a consumption', () => {
    let props: any;
    props = createTestProps({});
    const {getByText, getByTestId, queryByTestId} = render(
      <WhatDidYouEat {...props} />,
    );

    let foodNameInput = getByTestId('foodNameInput');
    let calorieInput = getByTestId('calorieInput');
    fireEvent.changeText(foodNameInput, 'cheesecake');
    fireEvent.changeText(calorieInput, '1000');
    fireEvent.press(getByText('Munch'));
    fireEvent.press(getByTestId('deleteConsumption'));

    expect(queryByTestId('consumptionName')?.children[0]).toBeFalsy();
    expect(queryByTestId('consumptionCalories')?.children[0]).toBeFalsy();
  });
});
