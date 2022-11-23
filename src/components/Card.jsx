import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props) => {

    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                { props.children }
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    card: {
        borderRadius: 25,
        elevation: 3,
        backgroundColor: '#8BE4A3',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        width: 334,
        height: 294,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
        alignItems: 'center',
    }
});

export default Card;