import React, { useState } from 'react';
import { StyleSheet, Button, Text, TextInput, View, Image } from 'react-native';

import { useDispatch } from 'react-redux';

import { login } from '../../redux/actions/auth';

export default function Login({ navigation }) {

    const dispatch = useDispatch();

    const [userDetails, setUserDetails] = useState({ email: '', password: '' });

    const onLogin = () => {
        dispatch(login(userDetails, navigation));
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/instagramText.png')} style={styles.image} />
            <TextInput
                placeholder='Email'
                onChangeText={(email) => setUserDetails({ ...userDetails, email })}
                style={styles.inputField}
            />
            <TextInput
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={(password) => setUserDetails({ ...userDetails, password })}
                style={styles.inputField}
            />
            <View style={styles.button}>
                <Button
                    title='Log In'
                    onPress={onLogin}
                />
            </View>
            <View style={{ paddingTop: 10 }}>
                <Text>Don't have an account? <Text style={{ color: '#2196F3' }} onPress={() => navigation.navigate('Register')}>Sign Up.</Text></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 100,
        width: 300,
        marginBottom: 20
    },
    inputField: {
        height: 50,
        width: '85%',
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 10,
        paddingHorizontal: 10
    },
    button: {
        width: '85%',
        marginVertical: 10,
    }
});