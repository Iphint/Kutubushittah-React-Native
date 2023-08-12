/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DetailHadist,
  Hadist,
  History,
  HomePage,
  SingleHadist,
  SplashScreen,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Hadist" component={Hadist} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="DetailHadist" component={DetailHadist} />
      <Stack.Screen name="SingleHadist" component={SingleHadist} />
    </Stack.Navigator>
  );
};

export default Navigation;
