import React from "react";
import { Image, Text, TouchableOpacity, ScrollView } from "react-native";
import Card from "./Card";

const EnfermedadesScreen = ({ navigation }) => {
    
        return(
            <ScrollView
                contentContainerStyle={{ alignItems: 'center' }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate('Tizon Tardio De La Papa')} // Navegación a la pantalla de Tizon Tardio De La Papa
                >
                    <Card>
                        <Text style={{ fontWeight: 'bold' }} >Tizon tardio de la papa</Text>
                        <Image source={require('../imgs/enfermedades/tizon_tardio_de_la_papa.jpg')} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Tizon Temprano De La Papa')} // Navegación a la pantalla de Tizón Temprano De La Papa
                >
                    <Card>
                        <Text style={{ fontWeight : 'bold' }} >Tizon temprano de la papa</Text>
                        <Image source={require('../imgs/enfermedades/tizon_temprano_de_la_papa.jpg')} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Botrytis')} // Navegación a la pantalla de Botrytis
                >
                    <Card>
                        <Text style={{ fontWeight : 'bold' }} >Botrytis (Papa)</Text>
                        <Image source={require('../imgs/enfermedades/papa_botrytis.jpg')} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Roya')} // Navegación a la pantalla de Roya
                >
                    <Card>
                        <Text style={{ fontWeight : 'bold' }} >Roya (Avena)</Text>
                        <Image source={require('../imgs/enfermedades/avena_roya.jpg')} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Septoriosis')} // Navegación a la pantalla de Septoriosis
                >
                    <Card>
                        <Text style={{ fontWeight : 'bold' }} >Septoriosis (Avena)</Text>
                        <Image source={require('../imgs/enfermedades/avena_septoriosis.jpg')} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Oidio')} // Navegación a la pantalla de Oidio
                >
                    <Card>
                        <Text style={{ fontWeight : 'bold' }} >Oidio (Avena)</Text>
                        <Image source={require('../imgs/enfermedades/avena_oidio.jpg')} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Mal Del Pie')} // Navegación a la pantalla de Mal del pie
                >
                    <Card>
                        <Text style={{ fontWeight : 'bold' }} >Mal del pie (Trigo)</Text>
                        <Image source={require('../imgs/enfermedades/trigo_mal_del_pie.jpg')} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Roya Del Tallo')} // Navegación a la pantalla de Roya del tallo
                >
                    <Card>
                        <Text style={{ fontWeight : 'bold' }} >Roya del tallo (Trigo)</Text>
                        <Image source={require('../imgs/enfermedades/trigo_roya_del_tallo.jpg')} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Septoriosis Foliar')} // Navegación a la pantalla de Septoriosis Foliar
                >
                    <Card>
                        <Text style={{ fontWeight : 'bold' }} >Septoriosis foliar (Trigo)</Text>
                        <Image source={require('../imgs/enfermedades/trigo_septoriosis_foliar.jpg')} style={{ width: 250, height: 200, marginTop: 30, borderRadius: 20 }} />
                    </Card>
                </TouchableOpacity>
            </ScrollView>
        )
    
};

export default EnfermedadesScreen;