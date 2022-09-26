import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  NativeModules,
} from 'react-native';
import FoodInputBar from '../components/FoodInputBar';
import Food from '../components/Food';
import {HomeProps} from '../types/routeTypes';
import moment from 'moment';
import {WhatDidYouEatData, Consumption} from '../types/componentTypes';

const WhatDidYouEat = ({route, navigation}: HomeProps) => {
  const {CalendarModule} = NativeModules;
  const [state, setState] = useState<WhatDidYouEatData>();

  const totalCalories = () => {
    let totalCalorieCount = 0;
    if (state?.consumedFoods !== undefined) {
      state?.consumedFoods.forEach((consumedFood: Consumption) => {
        totalCalorieCount = totalCalorieCount + consumedFood.calories;
      });
    }
    return totalCalorieCount;
  };
  const addConsumption = (foodInput: string, foodCalories: string) => {
    CalendarModule.createCalendarEvent(foodInput, foodCalories);
    let consumption = {
      name: foodInput,
      calories: parseInt(foodCalories),
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
    if (!!state?.consumedFoods) {
      let newFoodArray = state.consumedFoods.filter(
        food => food.name !== nameToDelete,
      );
      setState({...state, consumedFoods: newFoodArray});
    }
  };

  const saveDay = () => {
    if (!state?.consumedFoods) {
      return;
    }
    setState({...state, consumedFoods: []});
  };

  const FlatListHeader = () => {
    return (
      <View>
        <Text style={styles.header}>What did you eat?</Text>
        <Text style={styles.subHeader}>{moment().format('MMMM Do YYYY')}</Text>
        <View>
          <FoodInputBar addConsumption={addConsumption} />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            margin: 20,
          }}>
          <Text>Name</Text>
          <Text style={{marginLeft: 170}}>Calories</Text>
        </View>
      </View>
    );
  };

  const renderItem = (consumption: any) => {
    const {item} = consumption;
    return (
      <Food
        key={item.name}
        consumption={{name: item.name, calories: item.calories}}
        deleteConsumption={() => deleteConsumption(item.name)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={FlatListHeader}
        data={state?.consumedFoods}
        renderItem={renderItem}
      />
      <Text style={styles.totalCalorieCount}>
        Total Calories: {totalCalories()}
      </Text>
      <TouchableOpacity
        onPress={saveDay}
        style={styles.button}
        accessibilityLabel="saveDayOfConsumptions">
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
    marginTop: 50,
    marginLeft: 40,
  },
  subHeader: {
    fontSize: 15,
    margin: 10,
    marginLeft: 110,
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
    marginBottom: 20,
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
