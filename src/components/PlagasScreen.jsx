import React from "react";
import { Image, Text, TouchableOpacity, ScrollView } from "react-native";
import Card from "./Card";

const PlagasScreen = ({ navigation }) => { // Pantalla de las plagas

    return(
        <ScrollView // Scroll de la pantalla
            contentContainerStyle={{ alignItems: 'center' }}
        >
            <TouchableOpacity
                onPress={ () => { navigation.navigate('Nematodo Dorado') } } // Navegación a la pantalla de Nematodo Dorado
            >
                <Card>
                    <Text style={{ fontWeight: 'bold' }} >Nematodo Dorado (Papa)</Text>
                    <Image source={require('../imgs/plagas/papa_nematodo_dorado.jpg')} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                </Card>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={ () => { navigation.navigate('Nematodo De la Pudicion Seca') } } // Navegación a la pantalla de Nematodo De La Pudricion Seca
            >
                <Card>
                    <Text style={{ fontWeight: 'bold' }} >Nematodo de la pudricion seca (Papa)</Text>
                    <Image source={require('../imgs/plagas/papa_nematodo_de_la_pudricion_seca.jpg')} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                </Card>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={ () => { navigation.navigate('Gusanos Blancos') } } // Navegación a la pantalla de Gusano Blancos
            >
                <Card>
                    <Text style={{ fontWeight: 'bold' }} >Gusanos blancos (Avena)</Text>
                    <Image source={require('../imgs/plagas/avena_gusanos_blancos.jpg')} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                </Card>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={ () => { navigation.navigate('Gusanos Cortadores') } } // Navegación a la pantalla de Gusano Cortadores
            >
                <Card>
                    <Text style={{ fontWeight: 'bold' }} >Gusanos cortadores (Avena)</Text>
                    <Image source={require('../imgs/plagas/avena_gusanos_cortadores.jpg')} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                </Card>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={ () => { navigation.navigate('Trips') } } // Navegación a la pantalla de Trips
            >
                <Card>
                    <Text style={{ fontWeight: 'bold' }} >Trips (Trigo)</Text>
                    <Image source={require('../imgs/plagas/trigo_trips.jpg')} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                </Card>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={ () => { navigation.navigate('Babosas') } } // Navegación a la pantalla de Babosas
            >
                <Card>
                    <Text style={{ fontWeight: 'bold' }} >Babosas, Caracoles (Trigo)</Text>
                    <Image source={require('../imgs/plagas/trigo_babosas.jpg')} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                </Card>
            </TouchableOpacity>
        </ScrollView>
    )

};

export default PlagasScreen;