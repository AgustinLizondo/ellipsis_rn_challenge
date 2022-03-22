export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_TO_CART = 'ADD_TO_CART';

export const removeFromCart = (item) => ({
    type: REMOVE_FROM_CART,
    item: item
})

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    item: item
})