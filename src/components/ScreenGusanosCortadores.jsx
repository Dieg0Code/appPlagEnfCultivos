import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Card from "./Card";

const ScreenGusanosCortadores = () =>{
    return(
        <ScrollView>
        <Text style={styles.title}>Gusanos Cortadores</Text>
        <Text style={styles.text}>Son conocidas como gusanos cortadores. Permanecen enterradas en el suelo y sólo salen a la superficie para alimentarse, generalmente en la oscuridad. Son de colores grises oscuros, semejantes al medio en que se ocultan. Son del tipo eruciforme, es decir, que poseen 3 pares de patas</Text>
        <Image source={require('../imgs/plagas/avena_gusanos_cortadores.jpg')} style={styles.image} />
        <Text style={styles.subtitle}>Síntomas</Text>
        <Text style={styles.text}>En estado de plántula corta a nivel del cuello y ocasionalmente asciende al follaje para alimentarse de las hojas basales..</Text>
        <Image source={require('../imgs/plagas/avena_sintoma_gusanos_cortadores.jpg')} style={styles.image} />
        <Text style={styles.subtitle}>Medidas de prevención</Text>
        <Text style={styles.text}>Control cultural: el control de malezas es importante para reducir los ataques de cortadores, porque allí invernan las larvas, así como la preparación del suelo para destruir las larvas con rastras.</Text>
        <Text style={styles.subtitle}>Control Biologico y Quimico</Text>
        <Text style={styles.text}>Control biológico: en Chile se presentan parasitoides de larvas, tales como himenópteros del género Apanteles y dípteros de la familia Tachinidae. También puede haber control natural por microavispillas del género Trichogramma.Control químico: Pyrinex 48 E</Text>
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

export default ScreenGusanosCortadores;