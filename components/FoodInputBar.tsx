import React from 'react';
import {TextInput, View, Button} from 'react-native';

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
        flexDirection: 'column',
      }}>
      <View style={{padding: 10, display: 'flex', flexDirection: 'column'}}>
        <TextInput
          style={{height: 40}}
          placeholder="Enter what you ate!"
          onChangeText={text => setFoodInput(text)}
          value={foodInput}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Calories?"
          keyboardType="number-pad"
          onChangeText={text => setFoodCalories(text)}
          value={foodCalories}
        />
      </View>
      <View>
        <Button
          onPress={() => addConsumption(foodInput)}
          title="Add"
          color="blue"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
};

export default FoodInputBar;
