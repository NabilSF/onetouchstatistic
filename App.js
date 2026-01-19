/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions } from "react-native";

import type { Node } from 'react';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';
import {
  StyleSheet,
} from 'react-native';

//components
import HomeScreen from './components/Home';
import DetailScreen from './components/Detail';
import IView from './components/infView';
import colors from './assets/colors/colors';

//navigation
import {MainStackNavigator} from './navigation/StackNavigator';
import {DrawerNavigator} from './navigation/DrawerNavigator';

//const Stack = createStackNavigator();
const screenWidth = Dimensions.get("window").width;


const App: () => Node = () => {
  const headerWidth = screenWidth / 100 * 80;
  return (
    <NavigationContainer>
        <DrawerNavigator/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 3,
    backgroundColor: '#F4F9FF',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  }
});

export default App;