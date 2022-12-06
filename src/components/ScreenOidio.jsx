import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Card from "./Card";

const ScreenOidio = () =>{
    return(
        <ScrollView>
        <Text style={styles.title}>Oidio</Text>
        <Text style={styles.text}>Es causado por el hongo Blumeria graminis. Está asociada principalmente a condiciones de alta humedad relativa y temperaturas medias a altas.</Text>
        <Text style={styles.text}>La severidad de esta patología, avenas cultivadas bajo condiciones de riego generan un ambiente altamente favorable a la presencia de la enfermedad. </Text>
        <Text style={styles.subtitle}>Síntomas</Text>
        <Text style={styles.text}>El síntoma más característico del oidio, es la aparición de lo que asemeja pequeñas motas de algodón sobre las hojas, y que corresponden al micelio y las esporas del hongo. Estas estructuras pueden recubrir parcial o totalmente las láminas y vainas foliares, afectando la fotosíntesis.</Text>
        <Image source={require('../imgs/enfermedades/avena_oidio.jpg')} style={styles.image} />
        <Text style={styles.subtitle}>Medidas de prevención</Text>
        <Text style={styles.text}>Variedades: empleo de variedades resistentes o tolerantes al agente causal.</Text>
        <Text style={styles.text}>Fertilización: evitar exceso de fertilización nitrogenada.</Text>
        <Text style={styles.text}>Plantación: regular la población de plantas.</Text>
        <Text style={styles.subtitle}>Control Quimico</Text>
        <Text style={styles.text}>Nabac 25 Wp.</Text>
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

export default ScreenOidio;