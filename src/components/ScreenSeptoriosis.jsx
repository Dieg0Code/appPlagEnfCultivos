import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Card from "./Card";

const ScreenSeptoriosis = () =>{
    return(
        <ScrollView>
        <Text style={styles.title}>Septorisis o mancha de la hoja</Text>
        <Text style={styles.text}>Es causarla por el hongo deuteromicete Esla enfermedad está descrita como una de las patologías importantes la cual se puede detectar desde fiñes de invierno en hojas básales y luego en hojas superiores, en la medida que existan altas precipitaciones primaverales.</Text>
        <Text style={styles.subtitle}>Síntomas</Text>
        <Text style={styles.text}>Los síntomas se caracterizan por la presencia de manchas necróticas en las láminas foliares, de color café oscuro, en su mayoría avaladas, de 2 a 8 m.m aproximadamente, rodeadas de un halo clorótico. También pueden presentarse en las vainas tobares que rodean el tallo.</Text>
        <Image source={require('../imgs/enfermedades/avena_septoriosis.jpg')} style={styles.image} />
        <Text style={styles.subtitle}>Medidas de prevención</Text>
        <Text style={styles.text}>Rotación de cultivos y el atraso en la época de siembra, en especial cuando el destino del cultivo es el corte para ensilaje.</Text>
        <Text style={styles.subtitle}>Control Quimico</Text>
        <Text style={styles.text}>Artea 330 EC.</Text>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    image: {
        width: 250,
        height: 200,
        marginTop: 30,
        borderRadius: 20,
        alignSelf: 'center',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    text: {
        textAlign: 'center',
        padding: 10,
    }
});

export default ScreenSeptoriosis;