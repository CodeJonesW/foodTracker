import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import CompletedDayListItem from '../components/CompletedDayListItem';
import {ProfileProps} from '../Types/routeTypes';
import {Consumption} from './WhatDidYouEat';

const Profile = ({route, navigation}: ProfileProps) => {
  const {dailyConsumptionData, userId} = route.params;
  const [state, setState] = React.useState(() => {
    return {
      status: 'pending',
      error: null,
      allDaysOfConsumptions: [],
      newDayOfConsumptions: null,
    };
  });
  const {status, error, allDaysOfConsumptions, newDayOfConsumptions} = state;

  React.useEffect(() => {
    if (!dailyConsumptionData) {
      return;
    }
    let updatedAllDaysOfConsumptions = [
      ...state.allDaysOfConsumptions,
      dailyConsumptionData,
    ];
    setState({
      // @ts-ignore
      newDayOfConsumptions: dailyConsumptionData,
      // @ts-ignore
      allDaysOfConsumptions: updatedAllDaysOfConsumptions,
      status: 'loaded',
    });

    return () => {
      console.log('clean up!, i run when the component is unmounted');
    };
  }, [dailyConsumptionData]);

  if (status === 'pending') {
    return (
      <SafeAreaView>
        <View>
          <Text>
            Eat some food and then press the save button to see your data here!
          </Text>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView>
        {status === 'loaded' ? (
          <View style={styles.container}>
            {allDaysOfConsumptions.map((dailyConsumptionData, index) => {
              return (
                <CompletedDayListItem
                  key={index}
                  dailyConsumptionData={dailyConsumptionData}
                />
              );
            })}
          </View>
        ) : (
          // <View style={styles.container}>
          //   <View>
          //     <Text>Date: {dailyConsumptionData.date}</Text>
          //     <Text>
          //       Daily Total Calories: {dailyConsumptionData.totalCalories}
          //     </Text>
          //     {dailyConsumptionData.consumptions.map(
          //       (consumption: Consumption) => {
          //         return (
          //           <View>
          //             <Text>Consumption: {consumption.name}</Text>
          //             <Text>Calories: {consumption.calories}</Text>
          //           </View>
          //         );
          //       },
          //     )}
          //     <TouchableOpacity
          //       style={styles.button}
          //       accessibilityLabel="Record a Profile">
          //       <Text style={styles.cake}>🍰</Text>
          //     </TouchableOpacity>
          //   </View>
          // </View>
          <View>
            <Text>Loading...</Text>
          </View>
        )}
      </SafeAreaView>
    );
  }
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
