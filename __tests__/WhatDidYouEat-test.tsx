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
  test('uses the food input component to munch(save) a consumption', () => {
    let props: any;
    props = createTestProps({});
    const {getByText, getByPlaceholderText, queryByTestId} = render(
      <WhatDidYouEat {...props} />,
    );
    // refactor to avoid testing implementation details
    // placeholder text could change
    let foodNameInput = getByPlaceholderText('Enter what you ate! 👈');
    let calorieInput = getByPlaceholderText('Calories? 👈');
    fireEvent.changeText(foodNameInput, 'cheesecake');
    fireEvent.changeText(calorieInput, '1000');
    let munchBtn = getByText('Munch');
    fireEvent.press(munchBtn);

    expect(queryByTestId('consumptionName')?.children[0]).toEqual('cheesecake');
    expect(queryByTestId('consumptionCalories')?.children[0]).toEqual('1000');
  });
  test('uses the food component to delete a consumption', () => {
    let props: any;
    props = createTestProps({});
    const {getByText, getByPlaceholderText, queryByTestId} = render(
      <WhatDidYouEat {...props} />,
    );
    // refactor to avoid testing implementation details
    // placeholder text could change
    let foodNameInput = getByPlaceholderText('Enter what you ate! 👈');
    let calorieInput = getByPlaceholderText('Calories? 👈');
    fireEvent.changeText(foodNameInput, 'cheesecake');
    fireEvent.changeText(calorieInput, '1000');
    let munchBtn = getByText('Munch');
    fireEvent.press(munchBtn);

    expect(queryByTestId('consumptionName')?.children[0]).toEqual('cheesecake');
    expect(queryByTestId('consumptionCalories')?.children[0]).toEqual('1000');
  });
});
