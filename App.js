import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import homeScreen from "./src/screens/Home/index";
import settingsScreen from "./src/screens/FacilitySettings/index";

const AppNavigator = StackNavigator(
  {
    home: { screen: homeScreen },
    settings: { screen: settingsScreen },
  },

  {
    initialRouteName: "home",
    headerMode: "screen",
  }
);

export default AppNavigator
