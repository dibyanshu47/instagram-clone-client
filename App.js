import React, { useState, useEffect } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login';
import HomeScreen from './components/home/Home';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const Stack = createNativeStackNavigator();

export default function App() {

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const checkUser = async () => {
            try {
                let user = await AsyncStorage.getItem('user');
                user = JSON.parse(user);
                if (!user) {
                    setLoggedIn(false);
                } else {
                    setLoggedIn(true);
                }
            } catch (error) {
                console.log(error);
            }
        }
        checkUser();
    }, [])

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={!loggedIn ? 'Login' : 'Home'}>
                    <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='Home' component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
