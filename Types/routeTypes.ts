import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {WhatDidYouEatData} from './componentTypes';

export type RootStackParamList = {
  Home: {data: string};
  Profile: {
    route: {
      params: {};
    };
  };
};
export type ProfileProps = NativeStackScreenProps<
  RootStackParamList,
  'Profile'
>;
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
