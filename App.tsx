import React from 'react';
import WhatDidYouEat from './pages/WhatDidYouEat';
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
