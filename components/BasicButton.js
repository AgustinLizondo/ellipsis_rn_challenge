import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../assets/Constants/Colors';

const BasicButton = ({ onTap, text, cardStyles, textStyles }) => {
    return (
        <TouchableOpacity style={[styles.button, cardStyles]} onPress={onTap}>
            <Text style={[styles.textButton, textStyles]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default BasicButton

const styles = StyleSheet.create({
    button: {
        width: '45%',
        height: 48,
        backgroundColor: Colors.Gray,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        fontSize: 18
    },
})