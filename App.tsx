import React from 'react';
import WhatDidYouEat from './pages/WhatDidYouEat';
import Profile from './pages/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WhatDidYouEat"
          component={WhatDidYouEat}
          options={{title: 'Tough Love Calories'}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{title: 'Profile'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
