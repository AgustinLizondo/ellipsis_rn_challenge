import { SIGN_IN, SIGN_UP } from "../action/auth.action";

const INITIAL_STATE = {
    token: null,
    userId: null,
    isRegistered: null,
}

const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_UP:
            return { ...state, token: action.token, userId: action.userId }
        case SIGN_IN:
            return { ...state, token: action.token, userId: action.userId, isRegistered: action.isRegistered }
        default:
            return state
    }
}

export default AuthReducer;