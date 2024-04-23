import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from "./src/navigation/BottomTabNavigtor"
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
  );
}

export default App;
