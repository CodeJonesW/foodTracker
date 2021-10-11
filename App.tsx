import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Alert,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import FoodInputBar from './components/FoodInputBar';
import Food from './components/Food';

export interface Consumption {
  name: string;
  calories: string;
}

const App = () => {
  const [foodInput, setFoodInput] = useState<string>('');
  const [foodCalories, setFoodCalories] = useState<string>('');
  const [consumedFoods, setConsumptions] = useState<Consumption[]>([]);
  const addConsumption = () => {
    let consumption = {
      name: foodInput,
      calories: foodCalories,
    };
    if (foodInput === '') {
      Alert.alert('Lets put a name of the food in first.');
      return;
    }
    setConsumptions([...consumedFoods, consumption]);
    setFoodInput('');
    setFoodCalories('');
  };

  const deleteConsumption = (nameToDelete: string) => {
    let newFoodArray = consumedFoods.filter(food => food.name !== nameToDelete);
    setConsumptions(newFoodArray);
  };

  useEffect(() => {
    console.log(consumedFoods);
  }, [consumedFoods]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.header}>What did you eat?</Text>
        <View>
          <FoodInputBar
            foodInput={foodInput}
            setFoodInput={setFoodInput}
            setFoodCalories={setFoodCalories}
            foodCalories={foodCalories}
            addConsumption={addConsumption}
          />
        </View>

        <View style={{display: 'flex', flexDirection: 'column'}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              margin: 20,
            }}>
            <Text>Name</Text>
            <Text style={{marginLeft: 170}}>Calories</Text>
          </View>
          {consumedFoods.map((food: Consumption) => {
            return (
              <Food
                key={food.name}
                consumption={{name: food.name, calories: food.calories}}
                deleteConsumption={deleteConsumption}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 35,
    margin: 50,
  },
});

export default App;
