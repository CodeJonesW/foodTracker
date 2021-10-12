import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const Profile: React.FC = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Hello user</Text>
        <Text>View your intake</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('WhatDidYouEat')}
          style={styles.button}
          accessibilityLabel="Record a Profile">
          <Text style={styles.cake}>🍰</Text>
        </TouchableOpacity>
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
