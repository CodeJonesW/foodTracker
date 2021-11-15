import React, {useState} from 'react';
import {
  Alert,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const FoodInputBar: React.FC<{
  addConsumption: Function;
}> = ({children, addConsumption}) => {
  const [foodInput, setFoodInput] = useState<string>('');
  const [foodCalories, setFoodCalories] = useState<string>('');

  const submit = () => {
    if (foodInput === '') {
      Alert.alert('Lets put a name of the food in first.');
      return;
    }
    if (foodCalories === '') {
      Alert.alert('We need your calories bud');
      return;
    }
    addConsumption(foodInput, foodCalories);
    setFoodCalories('');
    setFoodInput('');
  };

  return (
    <View
      style={{
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
      }}>
      <View style={{padding: 10, display: 'flex', flexDirection: 'column'}}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter what you ate! 👈"
          placeholderTextColor="black"
          keyboardType="ascii-capable"
          testID="foodNameInput"
          onChangeText={text => setFoodInput(text)}
          value={foodInput}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Calories? 👈"
          placeholderTextColor="black"
          keyboardType="number-pad"
          testID="calorieInput"
          onChangeText={text => setFoodCalories(text)}
          value={foodCalories}
        />
      </View>

      <TouchableOpacity
        onPress={() => submit()}
        style={styles.button}
        accessibilityLabel="Record a food">
        <Text>Munch</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    marginLeft: 20,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    border: 'solid',
    borderColor: 'black',
    backgroundColor: 'green',
  },
  textInput: {
    height: 40,
    width: 200,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    padding: 5,
  },
});

export default FoodInputBar;
