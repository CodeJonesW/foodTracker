import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Consumption} from '../screens/WhatDidYouEat';

export type RootStackParamList = {
  Home: {data: string};
  Profile: {
    userId: number;
    dailyConsumptionData: {
      consumptions: Consumption[];
      totalCalories: number;
      date: string;
    };
  };
};
export type ProfileProps = NativeStackScreenProps<
  RootStackParamList,
  'Profile'
>;
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
