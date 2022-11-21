import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Card from './Card';

const OtherScreen = ({ navigation }) => {

    const [data, setData] = useState([
        {
            nombreCultivo: 'Papa',
            nombreCientifico: 'Solanum tuberosum',
            descripcion: 'Planta perteneciente a la familia de las solanáceas, originaria de Sudamérica y cultivada por todo el mundo por sus tubérculos comestibles.'
        },
        {
            nombreCultivo: 'Avena',
            nombreCientifico: 'Avena sativa',
            descripcion: 'La avena es un cultivo versátil y de multiuso; se utiliza como suplemento para producir forraje verde en periodos críticos para alimentación del ganado, especialmente en otoño e invierno. Los granos cubiertos con cascara, y los granos pelados y desnudos, sin cáscara, son Importantes tanto en alimentación animal como en alimentar animal y salud humana.'
        },
        {
            nombreCultivo: 'Trigo',
            nombreCientifico: 'Triticum spp',
            descripcion: 'El trigo es una planta gramínea anual con espigas. Es decir, se trata de una especie de pasto. Su altura es variable, va desde treinta centímetros hasta un metro y medio de largo.'
        }
    ]);

    return (
        <View>
            <FlatList
            style={{ backgroundColor: '#EBFDD7' }}
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Card>
                            <Text>{item.nombreCultivo}</Text>
                            <Text>{item.nombreCientifico}</Text>
                            <Text>{item.descripcion}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default OtherScreen;