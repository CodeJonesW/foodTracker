import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Consumption} from '../pages/WhatDidYouEat';

const CompletedDayListItem: React.FC<{
  trackedConsumptionDays: Consumption[];
}> = ({children, trackedConsumptionDays}) => {
  return (
    <View></View>

    // <View style={{display: 'flex', flexDirection: 'row', margin: 20}}>
    //   <View style={{width: 180, marginRight: '10%'}}>
    //     <Text>{consumption.name}</Text>
    //   </View>
    //   <View style={{width: 100}}>
    //     <Text>{consumption.calories}</Text>
    //   </View>
    //   <TouchableOpacity
    //     style={styles.button}
    //     accessibilityLabel="">
    //     <Text>👐</Text>
    //   </TouchableOpacity>
    // </View>
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
