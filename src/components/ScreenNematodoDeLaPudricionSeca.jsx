import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Card from "./Card";

const ScreenNematodoDeLaPudricionSeca = () =>{
    return(
        <ScrollView>
        <Text style={styles.title}>Nematodo De La Pudrición Seca</Text>
        <Text style={styles.text}>Corresponde a Ditylenchus destructor, nemátodos polífago que ataca alrededor de 70 especies de cultivos y malezas y también a algunos hongos</Text>
        <Image source={require('../imgs/plagas/papa_nematodo_de_la_pudricion_seca.jpg')} style={styles.image} />
        <Text style={styles.subtitle}>Síntomas</Text>
        <Text style={styles.text}>El síntoma típico del ataque de D. destructor es la pudrición seca del tubérculo. Ingresa al tubérculo a través de las lenticelas y una vez dentro del tejido forma colonias de individuos en todos los estados de desarrollo.</Text>
        <Image source={require('../imgs/plagas/papa_sintoma_nematodo_de_la_pudricion_seca.jpg')} style={styles.image} />
        <Text style={styles.subtitle}>Medidas de prevención</Text>
        <Text style={styles.text}>Resistencia. Deben utilizarse variedades con mayor resistencia siempre y cuando tengan aceptación comercial.</Text>
        <Text style={styles.subtitle}>Control Quimico</Text>
        <Text style={styles.text}>Aldicarb, sin embargo, ante los escases del producto y su impacto en el medio ambiente es preferible realizar rotación de cultivos como método de control.</Text>
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
        padding: 20,
    }
});

export default ScreenNematodoDeLaPudricionSeca;