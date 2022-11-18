import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import StartScreen from './src/components/StartScreen';
import MainStack from './navigation/MainStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
      <SafeAreaView style={{ flex: 1 }}>
        <MainStack />
      </SafeAreaView>
  );
}