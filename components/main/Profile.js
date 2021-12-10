import React from 'react'
import { Button, Text, View } from 'react-native'

import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../redux/constants/actionTypes';

export default function Profile({ navigation }) {

    const dispatch = useDispatch();

    const logout = () => {
        dispatch({ type: LOGOUT });
        navigation.navigate('Login');
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
                title='Logout'
                onPress={logout}
            />
        </View>
    )
}
