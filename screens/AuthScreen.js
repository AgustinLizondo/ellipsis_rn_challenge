import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import Colors from '../assets/Constants/Colors';
import BasicButton from '../components/BasicButton'
import { useNavigation } from '@react-navigation/native';
import SocialLoginButton from '../components/SocialLoginButton';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../store/action/auth.action';

const AuthScreen = () => {

    const user = useSelector(state => state.auth.token)

    const navigation = useNavigation();
    const dispatch = useDispatch()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = () => {
        dispatch(signUp(email, password))
        navigation.navigate('Home')
    }

    const handleSignUp = () => {
        dispatch(signUp(email, password))
        navigation.navigate('Home')

    }

    return (
        <View style={styles.card}>
            <View style={styles.margin}>
                <View>
                    <Text style={styles.dataLabel}>Email</Text>
                    <TextInput style={styles.dataForm}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View>
                    <Text style={styles.dataLabel}>Password</Text>
                    <TextInput style={styles.dataForm}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
            </View>
            <View style={styles.subCard}>
                <BasicButton
                    onTap={handleLogIn}
                    text={'Sign In'} />
                <BasicButton
                    onTap={handleSignUp}
                    text={'Sign Up'} />
            </View>
            <View style={styles.socialCard} >
                <SocialLoginButton
                    // onTap={}
                    socialMedia={'logo-google'} />
                <SocialLoginButton
                    // onTap={}
                    socialMedia={'logo-facebook'} />
            </View>
        </View >
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    dataForm: {
        borderBottomColor: Colors.Black,
        borderBottomWidth: 2,
        width: '75%',
        fontSize: 20,
        color: Colors.Black
    },
    dataLabel: {
        fontSize: 16,
        color: Colors.Black
    },
    margin: {
        marginLeft: 16,
        marginBottom: 16
    },
    card: {
        justifyContent: 'center',
        flex: 1
    },
    subCard: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    socialCard: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 24,
    }
})