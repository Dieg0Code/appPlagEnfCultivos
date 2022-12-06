import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Card from "./Card";

const ScreenRoyaDelTallo = () =>{
    return(
        <ScrollView>
        <Text style={styles.title}>Roya del tallo</Text>
        <Text style={styles.text}>La roya del tallo (Puccinia graminis) es un hongo que produce una enfermedad que afecta al trigo generando una gran pérdida en el cultivo si no se trata a tiempo.</Text>
        <Text style={styles.subtitle}>Síntomas</Text>
        <Text style={styles.text}>Aparición de lesiones generalmente ovales, de color café rojizas, principalmente en tallo. También se presentan en hojas, vainas foliares y espigas</Text>
        <Image source={require('../imgs/enfermedades/trigo_roya_del_tallo.jpg')} style={styles.image} />
        <Text style={styles.subtitle}>Medidas de prevención</Text>
        <Text style={styles.text}>Identificación de los estados de desarrollo del trigo permitirá a los agricultores llevar un manejo y control eficiente. De esta manera, si se presenta la enfermedad, se podrá controlar en su estado inicial.</Text>
        <Text style={styles.subtitle}>Control Quimico</Text>
        <Text style={styles.text}>Point benomyl 50 p.</Text>
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

export default ScreenRoyaDelTallo;