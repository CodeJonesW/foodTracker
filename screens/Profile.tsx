import React, {useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import CompletedDayListItem from '../components/CompletedDayListItem';
import {ProfileProps} from '../types/routeTypes';
import {dailyConsumptionData as mockDailyConsumptionData} from '../mockdata/data';
import {
  AllDaysOfConsumptions,
  WhatDidYouEatData,
} from '../types/componentTypes';

const Profile = ({route, navigation}: ProfileProps) => {
  // skipping pending for now because component always has mock data atm
  const [loadingState, setLoadingState] = useState<string>('loaded');

  const [allDaysOfConsumptions, setAllDays] = useState<
    AllDaysOfConsumptions | undefined
  >({
    daysOfConsumptions: [mockDailyConsumptionData],
  });

  if (loadingState === 'pending') {
    return (
      <SafeAreaView>
        <View>
          <Text style={styles.header} accessibilityLabel="ConsumeFoodToSeeData">
            🌮 Eat some food and then press the save button to see your data
            here!
          </Text>
        </View>
      </SafeAreaView>
    );
  } else if (loadingState === 'loaded') {
    return (
      <SafeAreaView>
        {allDaysOfConsumptions !== undefined ? (
          <View accessibilityLabel="profileView" style={styles.container}>
            {allDaysOfConsumptions.daysOfConsumptions.map(
              (dayOfData: WhatDidYouEatData, index) => {
                return (
                  <CompletedDayListItem key={index} dailyData={dayOfData} />
                );
              },
            )}
          </View>
        ) : (
          <View>
            <Text>Loading...</Text>
          </View>
        )}
      </SafeAreaView>
    );
  } else {
    return (
      <View>
        <Text>Something went wrong</Text>
      </View>
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
