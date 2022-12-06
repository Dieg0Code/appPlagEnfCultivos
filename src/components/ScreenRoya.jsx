import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Card from "./Card";

const ScreenRoya = () =>{
    return(
        <ScrollView>
        <Text style={styles.title}>Roya o polvillo de la hoja</Text>
        <Text style={styles.text}>Esta enfermedad no ha sido normalmente un problema de importancia para la producción de avena, dado que suele presentarse tarde en la temporada producto de las temperaturas relativamente bajas de la primavera.</Text>
        <Text style={styles.subtitle}>Síntomas</Text>
        <Text style={styles.text}>Los síntomas del polvillo de la hoja se reconocen por la presencia de pústulas de aspecto pulverulento, anaranjado, principalmente en la lámina foliar. Infecciones más severas pueden atacar la vaina foliar y las espiguillas de la panoja.</Text>
        <Image source={require('../imgs/enfermedades/avena_roya.jpg')} style={styles.image} />
        <Text style={styles.subtitle}>Medidas de prevención</Text>
        <Text style={styles.text}>Siembra: siembra de variedades resistentes o tolerantes.</Text>
        <Text style={styles.text}>Fertilización: Debe evitarse el exceso de fertilización nitrogenada, lo cual favorece una mayor severidad del ataque</Text>
        <Text style={styles.subtitle}>Control Quimico</Text>
        <Text style={styles.text}>Orkestra Ultra.</Text>
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

export default ScreenRoya;