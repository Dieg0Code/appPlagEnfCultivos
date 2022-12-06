import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';


const DetailsScreen = ({ route }) => {

    const { nombreCultivo, nombreCientifico, descripcion } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.text} >{nombreCultivo}</Text>
            <Text style={styles.text} >{nombreCientifico}</Text>
            <Text style={styles.text} >{descripcion}</Text>
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
    text: {
        fontSize: 20,
        color: '#349B6D',
        textAlign: 'left',
        margin: 10,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
    }
});

export default DetailsScreen;