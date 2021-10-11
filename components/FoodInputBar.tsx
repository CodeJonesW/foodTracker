import React from 'react';
import {TextInput, View, Button} from 'react-native';

const FoodInputBar: React.FC<{
  foodInput: string;
  setFoodInput: Function;
  setFoodCalories: Function;
  addConsumption: Function;
}> = ({children, foodInput, setFoodInput, addConsumption, setFoodCalories}) => {
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Enter what you ate!"
        onChangeText={text => setFoodInput(text)}
        defaultValue={foodInput}
      />
      <TextInput
        style={{height: 40}}
        placeholder="Calories?"
        keyboardType="number-pad"
        onChangeText={text => setFoodCalories(text)}
        defaultValue={foodInput}
      />
      <Button
        onPress={() => addConsumption(foodInput)}
        title="Add"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default FoodInputBar;
