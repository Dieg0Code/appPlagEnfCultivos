import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Card from "./Card";

const ScreenTizonTempranoDeLaPapa = () =>{
    return(
        <ScrollView>
        <Text style={styles.title}>Tizon Temprano De La Papa</Text>
        <Text style={styles.text}>El tizón temprano es causado por el hongo Alternaria solani, que se ha constituido como un problema serio debido a la cantidad de pérdidas en un 20 y 30% del rendimiento y en algunas ocasiones extremas, más del 50%.</Text>
        <Text style={styles.subtitle}>Síntomas</Text>
        <Text style={styles.text}>En las hojas se desarrollan lesiones más o menos circulares, de color marrón oscuro, con anillos dispuestos concéntricamente semejando un tablero de tiro al blanco; primero se desarrollan en las hojas inferiores, más viejas.</Text>
        <Image source={require('../imgs/enfermedades/tizon_temprano_de_la_papa.jpg')} style={styles.image} />
        <Text style={styles.subtitle}>Medidas de prevención</Text>
        <Text style={styles.text}>Post-cosecha: todos los residuos infectados deben sacarse del campo después de la cosecha.</Text>
        <Text style={styles.text}>Riego: riego adecuado y aplicación de fertilizantes (de acuerdo con las recomendaciones).</Text>
        <Text style={styles.subtitle}>Control Quimico</Text>
        <Text style={styles.text}>Manzate, Dithane, Mancozeb.</Text>
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

export default ScreenTizonTempranoDeLaPapa;