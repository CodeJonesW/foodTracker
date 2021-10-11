import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
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
    setConsumptions([...consumedFoods, consumption]);
    setFoodInput('');
    setFoodCalories('');
  };

  useEffect(() => {
    console.log(consumedFoods);
  }, [consumedFoods]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
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

        {consumedFoods.map((food: Consumption) => {
          return <Food consumption={food} />;
        })}
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
  },
});

export default App;
