import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../screens/HomeScreen';
import ProductScreen from '../../screens/ProductScreen';
import AuthScreen from '../../screens/AuthScreen';
import CartScreen from '../../screens/CartScreen';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {

    const user = useSelector(state => state.auth.token)

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Auth'
            >
                <Stack.Screen options={{ headerTitle: 'Products', headerBackVisible: false }} name='Home' component={HomeScreen} />
                <Stack.Screen name='Product' component={ProductScreen} />
                <Stack.Screen name='Cart' component={CartScreen} />
                <Stack.Screen options={{ headerShown: false }} name='Auth' component={AuthScreen} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default MainNavigator