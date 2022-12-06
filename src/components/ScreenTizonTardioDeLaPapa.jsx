import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Card from "./Card";

const ScreenTizonTardioDeLaPapa = () =>{
    return(
        <ScrollView>
        <Text style={styles.title}>Tizon Tardio De La Papa</Text>
        <Text style={styles.text}>El tizón tardío causado por el hongo Phytophthora infestan, es una de las enfermedades más importantes del cultivo de la papa a nivel mundial. Está presente en casi todas las áreas donde se cultiva en el mundo, provocando mayores pérdidas en zonas templadas y húmedas, ya que puede matar una plantación en 7 - 10 días.</Text>
        <Text style={styles.subtitle}>Síntomas</Text>
        <Text style={styles.text}>Afecta las hojas, los tallos y los tubérculos y puede destruir un campo de papas en pocos días. Los primeros síntomas aparecen en los bordes de las hojas inferiores, como pequeñas manchas de color verde oscuro de aspecto “acuoso” (sensación húmeda al tacto).</Text>
        <Image source={require('../imgs/enfermedades/tizon_tardio_de_la_papa.jpg')} style={styles.image} />
        <Text style={styles.subtitle}>Medidas de prevención</Text>
        <Text style={styles.text}>Semilla libre de enfermedades. El uso de semilla no infectada es una condición básica para la producción de papa, puesto que elimina del campo una fuente primaria de infección.</Text>
        <Text style={styles.text}>Procedimiento de siembra. Donde las temporadas de lluvia sean definidas, la severidad de la enfermedad puede reducirse mediante un cambio en momento.</Text>
        <Text style={styles.text}>Resistencia. Deben utilizarse variedades con mayor resistencia siempre y cuando tengan aceptación comercial.</Text>
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

export default ScreenTizonTardioDeLaPapa;