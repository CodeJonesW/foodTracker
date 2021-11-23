import * as React from 'react';
import {render} from '@testing-library/react-native';
import Profile from '../screens/Profile';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  route: {
    params: {},
  },
  ...props,
});

describe('Profile component', () => {
  test('Profile component renders correctly with no route params', () => {
    let props: any;
    props = createTestProps({});
    const {getByTestId, getByA11yLabel} = render(<Profile {...props} />);
    expect(getByA11yLabel('ConsumeFoodToSeeData')).toBeTruthy();
  });

  test('Profile component renders correctly with params', () => {
    let props: any;
    props = createTestProps({
      params: {
        dailyConsumptionData: [
          {
            name: 'Cheesecake',
            calories: 1000,
          },
        ],
        userId: 1,
      },
    });
    const {getByTestId, getByA11yLabel} = render(<Profile {...props} />);
    expect(getByA11yLabel('ConsumeFoodToSeeData')).toBeTruthy();
  });
});
