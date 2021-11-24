import * as React from 'react';
import {render} from '@testing-library/react-native';
import Profile from '../screens/Profile';
import type {ProfileProps} from '../types/routeTypes';

const createTestProps = (props: Partial<ProfileProps>) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

describe('Profile component', () => {
  test('Profile component renders correctly with mock data', () => {
    let props: any;
    props = createTestProps({});
    const {getByTestId, getByA11yLabel} = render(<Profile {...props} />);
    expect(getByA11yLabel('profileView')).toBeTruthy();
  });
});
