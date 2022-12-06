import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Card from "./Card";

const ScreenBotrytis = () =>{
    return(
        <ScrollView>
        <Text style={styles.title}>Botrytis</Text>
        <Text style={styles.text}>La pudrición gris es una enfermedad ocasionada por el hongo Botrytis cinerea, generalmente es de poca importancia económica. Los síntomas se hacen evidentes en el follaje hacia el final del período del cultivo afectando principalmente a plantas estresadas.</Text>
        <Text style={styles.subtitle}>Síntomas</Text>
        <Text style={styles.text}>Inicialmente afecta las flores, las cuales se pudren y muestran una esporulación de color grisáceo. Posteriormente, el tejido infectado cae sobre las hojas, iniciando la infección del follaje, donde se presentan lesiones inicialmente cafés bronceado, húmeda en su inicio y delimitada por las venas.</Text>
        <Image source={require('../imgs/enfermedades/papa_botrytis.jpg')} style={styles.image} />
        <Text style={styles.subtitle}>Medidas de prevención</Text>
        <Text style={styles.text}>Pulverización: Las pulverizaciones con productos preventivos pueden ser de utilidad, siempre que el follaje no esté recibiendo demasiada sombra.</Text>
        <Text style={styles.subtitle}>Control Quimico</Text>
        <Text style={styles.text}>Botrilex.</Text>
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

export default ScreenBotrytis;