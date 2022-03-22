import { REMOVE_FROM_CART, ADD_TO_CART } from "../action/cart.action"

const INITIAL_STATE = {
    cart: [],
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REMOVE_FROM_CART:
            return { ...state, cart: state.cart.filter(removedItem => removedItem !== action.item) }
        case ADD_TO_CART:
            return { ...state, cart: state.cart.concat(action.item) }
        default:
            return state;
    }
}

export default CartReducer;