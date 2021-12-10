import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login';
import MainScreen from './components/Main';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const Stack = createNativeStackNavigator();

export default function App() {

    const [landingScreen, setLandingScreen] = useState('Login');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const user = JSON.parse(await AsyncStorage.getItem('user'));
                if (user) setLandingScreen('Main');
                setLoaded(true);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [])

    if (!loaded) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={landingScreen}>
                    <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='Main' component={MainScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
