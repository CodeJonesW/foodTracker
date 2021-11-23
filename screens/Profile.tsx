import React, {useEffect} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
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

  useEffect(() => {
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
          <Text style={styles.header} accessibilityLabel="ConsumeFoodToSeeData">
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
  header: {
    fontSize: 35,
    margin: 50,
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
