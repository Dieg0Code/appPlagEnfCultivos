import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import CustomButton from './CustomButton'

const StartScreen = ({ navigation }) => {
    return (
        <View style={ styles.container }>
          <Image source={require('../imgs/logo.png')} />
          <CustomButton
            onPress={ () => {
              navigation.navigate('Cultivos')
            } }
          />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBFDD7',
  },
});

export default StartScreen;