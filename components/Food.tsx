import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Food: React.FC<{
  consumption: {name: string; calories: string};
  deleteConsumption: Function;
}> = ({children, consumption, deleteConsumption}) => {
  return (
    <View style={{display: 'flex', flexDirection: 'row', margin: 20}}>
      <View style={{width: 180, marginRight: '10%'}}>
        <Text>{consumption.name}</Text>
      </View>
      <View style={{width: 100}}>
        <Text>{consumption.calories}</Text>
      </View>
      <TouchableOpacity
        onPress={() => deleteConsumption(consumption.name)}
        style={styles.button}
        accessibilityLabel="Record a food">
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
