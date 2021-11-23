import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Consumption} from '../types/componentTypes';

const Food: React.FC<{
  consumption: Consumption;
  deleteConsumption: Function;
}> = ({children, consumption, deleteConsumption}) => {
  return (
    <View style={{display: 'flex', flexDirection: 'row', margin: 20}}>
      <View style={{width: 180, marginRight: '10%'}}>
        <Text testID="consumptionName">{consumption.name}</Text>
      </View>
      <View style={{width: 100}}>
        <Text testID="consumptionCalories">{consumption.calories}</Text>
      </View>
      <TouchableOpacity
        testID="deleteConsumption"
        onPress={() => deleteConsumption(consumption.name)}
        style={styles.button}
        accessibilityLabel="Delete a food consumption">
        <Text>❌</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    border: 'solid',
    borderColor: 'black',
  },
});

export default Food;
