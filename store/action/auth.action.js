import { Alert } from "react-native";

export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
let FIREBASE_SIGN_UP = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCdoIVshre69Ybecm003uklqXyMqhHzlp8";
let FIREBASE_SIGN_IN = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCdoIVshre69Ybecm003uklqXyMqhHzlp8";

export const signUp = (email, password) => {
    return async dispatch => {
        const response = await fetch(FIREBASE_SIGN_UP, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            })
        })
        const data = await response.json()

        dispatch({
            type: SIGN_UP,
            token: data.idToken,
            userId: data.localId,
        });
    }
}

export const signIn = (email, password) => {
    return async dispatch => {
        const response = await fetch(FIREBASE_SIGN_IN, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            })
        })
        const data = await response.json()

        if (!data.registered) {
            Alert.alert(
                'Error',
                '',
                ['OK']
            )
        }

        dispatch({
            type: SIGN_UP,
            token: data.idToken,
            userId: data.localId,
            isRegistered: data.registered
        });
    }
}

