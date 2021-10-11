import React from 'react';
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const FoodInputBar: React.FC<{
  foodInput: string;
  foodCalories: string;
  setFoodInput: Function;
  setFoodCalories: Function;
  addConsumption: Function;
}> = ({
  children,
  foodInput,
  setFoodInput,
  addConsumption,
  setFoodCalories,
  foodCalories,
}) => {
  return (
    <View
      style={{
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
      }}>
      <View style={{padding: 10, display: 'flex', flexDirection: 'column'}}>
        <TextInput
          style={{height: 40, width: 150}}
          placeholder="Enter what you ate!"
          onChangeText={text => setFoodInput(text)}
          value={foodInput}
        />
        <TextInput
          style={{height: 40, width: 150}}
          placeholder="Calories?"
          keyboardType="number-pad"
          onChangeText={text => setFoodCalories(text)}
          value={foodCalories}
        />
      </View>

      <TouchableOpacity
        onPress={() => addConsumption(foodInput)}
        style={styles.button}
        accessibilityLabel="Record a food">
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: '15%',
    marginLeft: '10%',
    border: 'solid',
    borderColor: 'black',
  },
});

export default FoodInputBar;
