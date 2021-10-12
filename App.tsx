import React from 'react';
import WhatDidYouEat from './pages/WhatDidYouEat';
import Profile from './pages/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Tough Love Calories"
          component={WhatDidYouEat}
          options={{
            tabBarIcon: ({color, size}) => <Text>🖲</Text>,
          }}
        />
        <Tab.Screen
          name="Tough Love Profile"
          component={Profile}
          options={{
            tabBarIcon: ({color, size}) => <Text>🍰</Text>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
