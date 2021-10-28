import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {ProfileProps} from '../Types/routeTypes';
import {Consumption} from './WhatDidYouEat';

const Profile = ({route, navigation}: ProfileProps) => {
  const {dailyConsumptionData, userId, date} = route.params;
  useEffect(() => {
    console.log(dailyConsumptionData);
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text>Date: {date}</Text>
          <Text>
            Daily Total Calories: {dailyConsumptionData.totalCalories}
          </Text>
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
            <Text style={styles.cake}>🍰</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    fontSize: 50,
    border: 'solid',
    borderColor: 'black',
    backgroundColor: 'blue',
    marginTop: 250,
  },
  cake: {
    fontSize: 100,
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    fontSize: 50,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default Profile;
