import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../assets/Constants/Colors';

const SocialLoginButton = ({ onTap, socialMedia }) => {
    return (
        <TouchableOpacity onPress={onTap} style={styles.socialMediaCard}>
            <Icon name={socialMedia} size={48} color={Colors.Black} />
        </TouchableOpacity>
    )
}

export default SocialLoginButton

const styles = StyleSheet.create({
    socialMediaCard: {
        borderRadius: 12,
        height: 64,
        width: 64,
        backgroundColor: Colors.Gray,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
    }
})