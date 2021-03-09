import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';

export default function App (){    
  return(
    <SafeAreaProvider>
      <AppContainer/>
    </SafeAreaProvider>
  )
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen : {
    screen : WelcomeScreen,
  },
  Drawer : {
    screen : AppDrawerNavigator,
  },
})

const AppContainer = createAppContainer(switchNavigator)
