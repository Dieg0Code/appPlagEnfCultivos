import React from "react";
import { Image, Text, TouchableOpacity, ScrollView } from "react-native";
import Card from "./Card";


const HomeScreen = ({ navigation }) => {

    return (
        <ScrollView
            contentContainerStyle={{ alignItems: 'center' }}
        >
            <TouchableOpacity
                onPress={() => navigation.navigate('Cultivos')}
            >
                <Card>
                    <Text style={{ fontWeight: 'bold' }} >Cultivos</Text>
                    <Image source={require('../imgs/cultivos.jpg')} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                </Card>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Plagas')}
            >
                <Card>
                    <Text style={{ fontWeight: 'bold' }} >Plagas</Text>
                    <Image source={require('../imgs/plagas.jpg')} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                </Card>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Enfermedades')}
            >
                <Card>
                    <Text style={{ fontWeight: 'bold' }} >Enfermedades</Text>
                    <Image source={require('../imgs/enfermedades.jpg')} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                </Card>
            </TouchableOpacity>
        </ScrollView>
    )


};


export default HomeScreen;