import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Card from "./Card";

const ScreenMalDelPie = () =>{
    return(
        <ScrollView>
        <Text style={styles.title}>Mal del pie</Text>
        <Text style={styles.text}>La enfermedad radicular llamada comúnmente "mal del pie" que ataca a algunos cereales como el trigo y la cebada, tiene gran importancia económica.</Text>
        <Text style={styles.subtitle}>Síntomas</Text>
        <Text style={styles.text}>Emergencia de plantas desuniformes, plantas cloróticas, raíces necróticas, espigas decoloradas, vanas.</Text>
        <Image source={require('../imgs/enfermedades/trigo_mal_del_pie.jpg')} style={styles.image} />
        <Text style={styles.subtitle}>Medidas de prevención</Text>
        <Text style={styles.text}>Planificar una estrategia de rotación de cultivos y manejo de rastrojos permite disminuir el riesgo de ataque y diseminación de numerosas enfermedades y plagas, cuyos agentes causales sobreviven en residuos de cultivo y en el suelo.</Text>
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

export default ScreenMalDelPie;