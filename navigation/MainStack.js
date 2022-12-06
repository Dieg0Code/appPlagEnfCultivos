import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from '../src/components/StartScreen';
import OtherScreen from '../src/components/OtherScreen';
import DetailsScreen from '../src/components/DetailsScreen';
import HomeScreen from '../src/components/HomeScreen';
import PlagasScreen from '../src/components/PlagasScreen';
import EnfermedadesScreen from '../src/components/EnfermedadesScreen';
import ScreenNematodoDorado from '../src/components/ScreenNematodoDorado';
import ScreenNematodoDeLaPudricionSeca from '../src/components/ScreenNematodoDeLaPudricionSeca';
import ScreenGusanosBlancos from '../src/components/ScreenGusanosBlancos';
import ScreenGusanosCortadores from '../src/components/ScreenGusanosCortadores';
import ScreenTrips from '../src/components/ScreenTrips';
import ScreenBabosas from '../src/components/ScreenBabosas';
import ScreenTizonTardioDeLaPapa from '../src/components/ScreenTizonTardioDeLaPapa';
import ScreenTizonTempranoDeLaPapa from '../src/components/ScreenTizonTempranoDeLaPapa';
import ScreenBotrytis from '../src/components/ScreenBotrytis';
import ScreenRoya from '../src/components/ScreenRoya';
import ScreenSeptoriosis from '../src/components/ScreenSeptoriosis';
import ScreenOidio from '../src/components/ScreenOidio';
import ScreenMalDelPie from '../src/components/ScreenMalDelPie';
import ScreenRoyaDelTallo from '../src/components/ScreenRoyaDelTallo';
import ScreenSeptoriosisFoliar from '../src/components/ScreenSeptoriosisFoliar';

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
        <Stack.Screen name="Nematodo Dorado" component={ScreenNematodoDorado} />
        <Stack.Screen name='Nematodo De la Pudicion Seca' component={ScreenNematodoDeLaPudricionSeca} />
        <Stack.Screen name="Gusanos Blancos" component={ScreenGusanosBlancos} />
        <Stack.Screen name="Gusanos Cortadores" component={ScreenGusanosCortadores} />
        <Stack.Screen name="Trips" component={ScreenTrips} />
        <Stack.Screen name="Babosas" component={ScreenBabosas} />
        <Stack.Screen name="Tizon Tardio De La Papa" component={ScreenTizonTardioDeLaPapa} />
        <Stack.Screen name="Tizon Temprano De La Papa" component={ScreenTizonTempranoDeLaPapa} />
        <Stack.Screen name="Botrytis" component={ScreenBotrytis} />
        <Stack.Screen name="Roya" component={ScreenRoya} />
        <Stack.Screen name="Septoriosis" component={ScreenSeptoriosis} />
        <Stack.Screen name="Oidio" component={ScreenOidio} />
        <Stack.Screen name="Mal Del Pie" component={ScreenMalDelPie} />
        <Stack.Screen name="Roya Del Tallo" component={ScreenRoyaDelTallo} />
        <Stack.Screen name="Septoriosis Foliar" component={ScreenSeptoriosisFoliar} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStack;