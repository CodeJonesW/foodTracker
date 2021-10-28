import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Consumption} from '../pages/WhatDidYouEat';

export type RootStackParamList = {
  Home: {data: string};
  Profile: {
    userId: number;
    dailyConsumptionData: {
      consumptions: Consumption[];
      totalCalories: number;
    };
    date: number;
  };
};
export type ProfileProps = NativeStackScreenProps<
  RootStackParamList,
  'Profile'
>;
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
