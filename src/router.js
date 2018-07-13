import React from 'react';
import { createStackNavigator } from 'react-navigation';

// import screens
import HomeScreen from './screens/HomeScreen';
import TestScreen from './screens/TestScreen';

const Router = createStackNavigator({
  Home: { screen: HomeScreen },
  Test: { screen: TestScreen },
});

export default Router;
