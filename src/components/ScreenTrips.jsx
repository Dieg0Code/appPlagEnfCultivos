import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Card from "./Card";

const ScreenTrips = () =>{
    return(
        <ScrollView>
        <Text style={styles.title}>Trips</Text>
        <Text style={styles.text}>Los trips adultos son insectos pequeños, alargados con unas características alas de aspecto plumoso. Miden alrededor de 1mm y tienen un color negro.</Text>
        <Image source={require('../imgs/plagas/trigo_trips.jpg')} style={styles.image} />
        <Text style={styles.subtitle}>Síntomas</Text>
        <Text style={styles.text}>Comúnmente se les encuentra bajo la vaina de la hoja bandera, alimentándose del tallo. No obstante, también pueden atacar las hojas, tallos y espigas. Las formas adultas y las ninfas producen daños y, cuando su número es grande, hacen que el tejido del cual se alimentan tome una coloración gris plateada.</Text>
        <Image source={require('../imgs/plagas/trigo_sintoma_trips.jpg')} style={styles.image} />
        <Text style={styles.subtitle}>Medidas de prevención</Text>
        <Text style={styles.text}>Monitoreo de las condiciones climáticas los patógenos se ven favorecidos bajo ciertas condiciones climáticas, altas temperaturas combinadas con alta humedad durante el ciclo de cultivo, puede ser un factor determinante para el desarrollo de enfermedades foliares y radiculares.</Text>
        <Text style={styles.subtitle}>Control Quimico</Text>
        <Text style={styles.text}>Thripex.</Text>
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

export default ScreenTrips;