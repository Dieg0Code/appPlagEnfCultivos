import React from "react";
import { Image, Text, TouchableOpacity, ScrollView } from "react-native";
import Card from "./Card";

const PlagasScreen = ({ navigation }) => {

    return(
        <ScrollView
            contentContainerStyle={{ alignItems: 'center' }}
        >
            <TouchableOpacity>
                <Card>
                    <Text style={{ fontWeight: 'bold' }} >Nematodo Dorado (Papa)</Text>
                    <Image source={require('../imgs/plagas/papa_nematodo_dorado.jpg')} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                </Card>
            </TouchableOpacity>
            <TouchableOpacity>
                <Card>
                    <Text style={{ fontWeight: 'bold' }} >Nematodo de la pudricion seca (Papa)</Text>
                    <Image source={require('../imgs/plagas/papa_nematodo_de_la_pudricion_seca.jpg')} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                </Card>
            </TouchableOpacity>
            <TouchableOpacity>
                <Card>
                    <Text style={{ fontWeight: 'bold' }} >Gusanos blancos (Avena)</Text>
                    <Image source={require('../imgs/plagas/avena_gusanos_blancos.jpg')} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                </Card>
            </TouchableOpacity>
            <TouchableOpacity>
                <Card>
                    <Text style={{ fontWeight: 'bold' }} >Gusanos cortadores (Avena)</Text>
                    <Image source={require('../imgs/plagas/avena_gusanos_cortadores.jpg')} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                </Card>
            </TouchableOpacity>
            <TouchableOpacity>
                <Card>
                    <Text style={{ fontWeight: 'bold' }} >Trips (Trigo)</Text>
                    <Image source={require('../imgs/plagas/trigo_trips.jpg')} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                </Card>
            </TouchableOpacity>
            <TouchableOpacity>
                <Card>
                    <Text style={{ fontWeight: 'bold' }} >Babosas, Caracoles (Trigo)</Text>
                    <Image source={require('../imgs/plagas/trigo_babosas.jpg')} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                </Card>
            </TouchableOpacity>
        </ScrollView>
    )

};

export default PlagasScreen;