import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions } from "react-native";


import type { Node } from 'react';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';
import {
  StyleSheet,
} from 'react-native';

//components
import HomeScreen from '../components/Home';
import DetailScreen from '../components/Detail';
import IView from '../components/infView';
import colors from '../assets/colors/colors';

const Stack = createStackNavigator();
const screenWidth = Dimensions.get("window").width;
const headerWidth = screenWidth / 100 * 80;

const MainStackNavigator = () => {
  return (
    
    <Stack.Navigator>
        <Stack.Screen name="HomeScr" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Detail"
          component={DetailScreen}
          options={({ route }) => ({
            title: route.params.name, headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: '#ffff',
            headerTitleStyle: {
              color: '#ffffff',
              maxWidth: headerWidth,
            }
          })} />
        <Stack.Screen name="IView"
          component={IView}
          options={({ route }) => ({
            headerTintColor: '#ffff',
            headerTitleStyle: {
              color: '#ffffff',
              maxWidth: headerWidth,
            }
          })} />
      </Stack.Navigator>
  );
};

export {MainStackNavigator};
