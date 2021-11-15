import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Consumption} from '../screens/WhatDidYouEat';

const CompletedDayListItem: React.FC<{
  dailyConsumptionData: {
    consumptions: Consumption[];
    date: number;
    totalCalories: number;
  };
}> = ({children, dailyConsumptionData}) => {
  return (
    <View>
      <Text>Date: {dailyConsumptionData.date}</Text>
      <Text>Daily Total Calories: {dailyConsumptionData.totalCalories}</Text>
      {dailyConsumptionData.consumptions.map((consumption: Consumption) => {
        return (
          <View>
            <Text>Consumption: {consumption.name}</Text>
            <Text>Calories: {consumption.calories}</Text>
          </View>
        );
      })}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel="Record a Profile">
        <Text>🍰</Text>
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

export default CompletedDayListItem;
