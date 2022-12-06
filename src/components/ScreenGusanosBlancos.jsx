import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Card from "./Card";

const ScreenGusanosBlancos = () =>{
    return(
        <ScrollView>
        <Text style={styles.title}>Gusanos Blancos</Text>
        <Text style={styles.text}>Es una especie de coleóptero conocido comúnmente como pololo café, pololo verde o San Juan, el cual destaca por ser una especie presente en el sur de Chile, siendo muy agresivo en nuestros jardines cuando se encuentra en un número de individuos capaces de alimentarse de las raíces</Text>
        <Image source={require('../imgs/plagas/avena_gusanos_blancos.jpg')} style={styles.image} />
        <Text style={styles.subtitle}>Síntomas</Text>
        <Text style={styles.text}>Amarillamiento del follaje, perdida de sujeción de las plantas y finalmente la muerte de estas.</Text>
        <Image source={require('../imgs/plagas/avena_sintoma_gusanos_blancos.jpg')} style={styles.image} />
        <Text style={styles.subtitle}>Medidas de prevención</Text>
        <Text style={styles.text}>Laboreo de suelo. Invertir la capa de suelo los primeros 5 cm de modo que los gusanos queden expuestos a la luz y sean devorados por sus depredares naturales.
        Muestreo de suelo. Tomar muestras de suelo para determinar la cantidad de gusanos promedios encontrados.</Text>
        <Text style={styles.subtitle}>Control Biologico</Text>
        <Text style={styles.text}>Entre los principales agentes de control natural encontrados más comúnmente destacan las aves silvestres diurnas como la bandurria y tiuque, y aves nocturnas como el pequén. Sin embargo, son los insectos depredadores y parasitoides, y los hongos entomopatógenos, los que aparecen regularmente en la revisión de las muestras de suelo y, por ende, necesarios de reconocer y evaluar.</Text>
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

export default ScreenGusanosBlancos;