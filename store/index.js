import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import CartReducer from './reducer/cart.reducer';
import AuthReducer from './reducer/auth.reducer'

const RootReducer = combineReducers({
    cart: CartReducer,
    auth: AuthReducer
})

export default createStore(RootReducer, applyMiddleware(thunk));