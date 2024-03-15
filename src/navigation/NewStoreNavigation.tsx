import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DrinkDetailsScreen from '../screens/DrinkDetailsScreen';
import {IDrink} from '../data/Model';
const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  DrinkDetails: {item: IDrink};
};

const NewStoreNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'orange',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: 'white',
          fontSize: 24,
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Drinks',
        }}
      />
      <Stack.Screen
        name="DrinkDetails"
        component={DrinkDetailsScreen}
        options={{
          title: 'Drink Details',
        }}
      />
    </Stack.Navigator>
  );
};

export default NewStoreNavigation;
