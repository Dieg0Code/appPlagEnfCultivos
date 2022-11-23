import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from '../src/components/StartScreen';
import OtherScreen from '../src/components/OtherScreen';
import DetailsScreen from '../src/components/DetailsScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
          backAnimation: 'slide_from_left',
        }}
      >

        <Stack.Screen name="Inicio" component={StartScreen} />
        <Stack.Screen name="Home" component={OtherScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStack;