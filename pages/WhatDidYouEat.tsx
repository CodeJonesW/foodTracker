import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
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
  consumedFoods?: Consumption[];
}
const WhatDidYouEat = ({route, navigation}: HomeProps) => {
  const [consumedFoods, setConsumptions] = useState<Consumption[]>([]);

  const [state, setState] = useState<WhatDidYouEatState>();

  const totalCalories = () => {
    let totalCalorieCount = 0;
    if (state?.consumedFoods !== undefined) {
      state?.consumedFoods.forEach((food: Consumption) => {
        totalCalorieCount = totalCalorieCount + parseInt(food.calories);
      });
    }
    return totalCalorieCount;
  };
  const addConsumption = (foodInput: string, foodCalories: string) => {
    let consumption = {
      name: foodInput,
      calories: foodCalories,
    };
    if (!state?.consumedFoods) {
      setState({
        consumedFoods: [consumption],
      });
    } else {
      setState({
        consumedFoods: [...state.consumedFoods, consumption],
      });
    }
  };

  const deleteConsumption = (nameToDelete: string) => {
    let newFoodArray = consumedFoods.filter(food => food.name !== nameToDelete);
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
        date: Date.now(),
      },
      userId: 1,
    });
    setState({...state, consumedFoods: []});
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.header}>What did you eat?</Text>
        <View>
          <FoodInputBar addConsumption={addConsumption} />
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
          {state?.consumedFoods !== undefined
            ? state?.consumedFoods.map((food: Consumption) => {
                return (
                  <Food
                    key={food.name}
                    consumption={{name: food.name, calories: food.calories}}
                    deleteConsumption={deleteConsumption}
                  />
                );
              })
            : null}
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
