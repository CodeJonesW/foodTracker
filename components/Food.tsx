import React from 'react';
import {Text, View} from 'react-native';

const Food: React.FC<{
  consumption: {name: string; calories: string};
}> = ({children, consumption}) => {
  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <Text>{consumption.name}</Text>
      <Text style={{marginLeft: '55%'}}>{consumption.calories}</Text>
    </View>
  );
};

export default Food;
