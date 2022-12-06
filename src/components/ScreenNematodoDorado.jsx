import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Card from "./Card";

const ScreenNematodoDorado = () => {
    return(
        <ScrollView>
            <Text style={styles.title}>Nematodo dorado</Text>
            <Text style={{ textAlign : 'center', marginTop: 20 }}>Corresponde al nematodo Globodera rostochiensis, gusanito microscópico que produce significativas reducciones de rendimiento cuando existe una alta densidad poblacional</Text>
            <Image source={require('../imgs/plagas/papa_nematodo_dorado.jpg')} style={styles.image} />
            <Text style={styles.subtitle}>Síntomas</Text>
            <Text style={styles.text}>La plaga causa síntomas aéreos poco diferenciables, excepto por una leve amarillez, menor vigor, escaso crecimiento y una senescencia anticipada. Las plantas evidencian hojas que toman un color verde pálido o amarillo que se marchita cuando el clima es cálido, presentan poco desarrollo y se ven descoloridas.</Text>
            <Image source={require('../imgs/plagas/papa_sintoma_nematodo_dorado.jpg')} style={styles.image} />
            <Text style={styles.subtitle}>Medidas de prevención</Text>
            <Text style={styles.text}>Semilla libre de enfermedades. El uso de semilla no infectada es una condición básica para la producción de papa, puesto que elimina del campo una fuente primaria de infección. 
            Resistencia. Deben utilizarse variedades con mayor resistencia siempre y cuando tengan aceptación comercial.</Text>
            <Text style={styles.subtitle}>Control Quimico</Text>
            <Text style={styles.text}>Tervigo</Text>
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

export default ScreenNematodoDorado;