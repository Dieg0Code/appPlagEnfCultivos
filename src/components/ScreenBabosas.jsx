import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Card from "./Card";

const ScreenBabosas = () =>{
    return(
        <ScrollView>
        <Text style={styles.title}>Babosas</Text>
        <Text style={styles.text}>Las babosas son moluscos gasterópodos terrestres sin caparazón que cubra el sistema digestivo, mientras que los caracoles moluscos con caparazón que provee de protección al sistema digestivo.</Text>
        <Image source={require('../imgs/plagas/trigo_babosas.jpg')} style={styles.image} />
        <Text style={styles.subtitle}>Síntomas</Text>
        <Text style={styles.text}>Síntomas: Las babosas y caracoles se alimentan del endospermo de las semillas en germinación, cortan las plántulas a ras del suelo y mordisquean las plantas más grandes, dejando franjas longitudinales en las hojas. </Text>
        <Image source={require('../imgs/plagas/trigo_sintoma_babosas.jpg')} style={styles.image} />
        <Text style={styles.subtitle}>Medidas de prevención</Text>
        <Text style={styles.text}>Monitoreo: importante monitorizar nuestras cosechas para detectar su aparición lo antes posible.</Text>
        <Text style={styles.subtitle}>Control Quimico</Text>
        <Text style={styles.text}>Toximol.</Text>
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

export default ScreenBabosas;