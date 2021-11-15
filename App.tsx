import React from 'react';
import WhatDidYouEat from './screens/WhatDidYouEat';
import Profile from './screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Text} from 'react-native';
import ErrorBoundary from './components/ErrorBoundary';
import {RootStackParamList} from './Types/routeTypes';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <ErrorBoundary>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={WhatDidYouEat}
            options={{
              tabBarIcon: ({color, size}) => <Text>🥑</Text>,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            initialParams={{userId: '123'}}
            options={{
              tabBarIcon: ({color, size}) => <Text>🍰</Text>,
            }}
          />
        </Tab.Navigator>
      </ErrorBoundary>
    </NavigationContainer>
  );
};

export default App;
