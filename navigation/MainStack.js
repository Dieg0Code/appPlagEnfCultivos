import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from '../src/components/StartScreen';
import OtherScreen from '../src/components/OtherScreen';
import DetailsScreen from '../src/components/DetailsScreen';
import HomeScreen from '../src/components/HomeScreen';
import PlagasScreen from '../src/components/PlagasScreen';
import EnfermedadesScreen from '../src/components/EnfermedadesScreen';

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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cultivos" component={OtherScreen} />
        <Stack.Screen name="Detalles" component={DetailsScreen} />
        <Stack.Screen name="Plagas" component={PlagasScreen} />
        <Stack.Screen name="Enfermedades" component={EnfermedadesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStack;