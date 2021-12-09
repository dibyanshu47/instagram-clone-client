import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login';

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
        <NavigationContainer>
            <Stack.Navigator initialRouteName={!loggedIn ? 'Login' : 'Home'}>
                <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
