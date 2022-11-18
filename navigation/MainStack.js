import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from '../src/components/StartScreen';
import OtherScreen from '../src/components/OtherScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="OtherScreen" component={OtherScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStack;