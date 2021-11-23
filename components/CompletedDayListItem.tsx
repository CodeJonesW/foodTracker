import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Consumption, WhatDidYouEatData} from '../types/componentTypes';

const CompletedDayListItem: React.FC<{
  dailyData: WhatDidYouEatData;
}> = ({children, dailyData: dailyConsumptionData}) => {
  return (
    <View>
      {dailyConsumptionData &&
      dailyConsumptionData.consumedFoods !== undefined ? (
        <View accessibilityLabel="completedDayListItem">
          <Text>Date: {dailyConsumptionData.date}</Text>
          <Text>
            Daily Total Calories: {dailyConsumptionData.totalCalories}
          </Text>
          {dailyConsumptionData.consumedFoods.map(
            (consumption: Consumption, index) => {
              return (
                <View key={index}>
                  <Text>Consumption: {consumption.name}</Text>
                  <Text>Calories: {consumption.calories}</Text>
                </View>
              );
            },
          )}
          <TouchableOpacity
            style={styles.button}
            accessibilityLabel="Record a Profile">
            <Text>🍰</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text>Loading</Text>
        </View>
      )}
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
