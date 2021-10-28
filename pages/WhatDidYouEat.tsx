import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Alert,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import FoodInputBar from '../components/FoodInputBar';
import Food from '../components/Food';
import {HomeProps} from '../Types/routeTypes';
export interface Consumption {
  name: string;
  calories: string;
}
export interface WhatDidYouEatState {
  foodInput?: string;
  foodCalories?: string;
  consumedFoods?: Consumption[];
}
const WhatDidYouEat = ({route, navigation}: HomeProps) => {
  const [foodInput, setFoodInput] = useState<string>('');
  const [foodCalories, setFoodCalories] = useState<string>('');
  const [consumedFoods, setConsumptions] = useState<Consumption[]>([]);

  const [state, setState] = useState<WhatDidYouEatState>();

  // const {foodInput, foodCalories, consumedFoods} = state;

  const totalCalories = () => {
    let totalCalorieCount = 0;
    consumedFoods.map((food: Consumption) => {
      totalCalorieCount = totalCalorieCount + parseInt(food.calories);
    });
    return totalCalorieCount;
  };
  const addConsumption = () => {
    let consumption = {
      name: foodInput,
      calories: foodCalories,
    };
    if (foodInput === '') {
      Alert.alert('Lets put a name of the food in first.');
      return;
    }
    if (foodCalories === '') {
      Alert.alert('We need your calories bud');
      return;
    }
    setState({
      foodInput: '',
      foodCalories: '',
      consumedFoods: [...consumedFoods, consumption],
    });
    setConsumptions([...consumedFoods, consumption]);
    setFoodCalories('');
    setFoodInput('');
  };

  const deleteConsumption = (nameToDelete: string) => {
    let newFoodArray = consumedFoods.filter(food => food.name !== nameToDelete);
    setConsumptions(newFoodArray);
    setState({...state, consumedFoods: newFoodArray});
  };

  const saveDay = () => {
    console.log('save day');
    if (!state?.consumedFoods) {
      return;
    }
    navigation.navigate('Profile', {
      dailyConsumptionData: {
        consumptions: state.consumedFoods,
        totalCalories: totalCalories(),
      },
      userId: 1,
      date: Date.now(),
    });
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

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
      <Text style={styles.totalCalorieCount}>
        Total Calories: {totalCalories()}
      </Text>
      <TouchableOpacity
        onPress={saveDay}
        style={styles.button}
        accessibilityLabel="Record a food">
        <Text>💾</Text>
      </TouchableOpacity>
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
  totalCalorieCount: {
    width: 300,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    width: 40,
    height: 40,
    marginLeft: 20,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    border: 'solid',
    borderColor: 'black',
    backgroundColor: 'green',
  },
});

export default WhatDidYouEat;
