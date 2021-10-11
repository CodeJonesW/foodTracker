import React from 'react';
import {Text, View} from 'react-native';

const Food: React.FC<{
  consumption: {name: string; calories: number};
}> = ({children, consumption}) => {
  return (
    <View style={{padding: 10}}>
      <Text>{consumption.name}</Text>
      <Text>{consumption.calories}</Text>
    </View>
  );
};

export default Food;
