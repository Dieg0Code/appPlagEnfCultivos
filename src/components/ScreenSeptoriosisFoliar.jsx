import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Card from "./Card";

const ScreenSeptoriosisFoliar = () =>{
    return(
        <ScrollView>
        <Text style={styles.title}>Septoriosis foliar</Text>
        <Text style={styles.text}>La septoriosis es una enfermedad que afecta principalmente al cultivo del trigo, (tanto blando como duro) puede afectar al cultivo en cualquier fase de desarrollo, siendo el momento de afección más crítico el que va desde el final de ahijado hasta la maduración del grano.</Text>
        <Text style={styles.subtitle}>Síntomas</Text>
        <Text style={styles.text}>Manchas cloróticas que necrosan en el centro y presentan puntos negros.</Text>
        <Image source={require('../imgs/enfermedades/trigo_septoriosis_foliar.jpg')} style={styles.image} />
        <Text style={styles.subtitle}>Medidas de prevención</Text>
        <Text style={styles.text}>Uso de variedades resistentes a determinadas enfermedades, INIA ha incorporado esta resistencia varietal a las variedades de candeales, lo que permite disminuir considerablemente las aplicaciones de fungicidas y en muchos casos no usar fungicidas foliares.</Text>
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

export default ScreenSeptoriosisFoliar;