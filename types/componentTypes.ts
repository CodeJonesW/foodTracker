export interface AllDaysOfConsumptions {
  daysOfConsumptions: WhatDidYouEatData[];
}
export interface Consumption {
  name: string;
  calories: number;
}
export interface WhatDidYouEatData {
  consumedFoods?: Consumption[];
  totalCalories?: number;
  date?: string;
}
