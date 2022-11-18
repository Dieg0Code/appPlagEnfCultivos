import React from 'react';
import { Text, View, StyleSheet, Pressable, TouchableOpacity } from 'react-native';

const CustomButton = ({ onPress, title = 'Ingresar' }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        backgroundColor: '#349B6D',
        padding: 15,
        borderRadius: 8,
        elevation: 3,
        alignItems: 'center',
        width: '70%',
        position: 'absolute',
        bottom: 32,
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#FBFBFB',
    }

})

export default CustomButton;