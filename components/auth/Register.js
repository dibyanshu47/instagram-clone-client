import React, { useState } from 'react';
import { StyleSheet, Button, Text, TextInput, View, Image } from 'react-native';

export default function Register({ navigation }) {

    const [userDetails, setUserDetails] = useState({ email: '', password: '' });

    const onSignUp = () => {

    }

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/instagramText.png')} style={styles.image} />
            <TextInput
                placeholder='Email'
                onChangeText={(email) => setUserDetails({ email })}
                style={styles.inputField}
            />
            <TextInput
                placeholder='Name'
                onChangeText={(name) => setUserDetails({ name })}
                style={styles.inputField}
            />
            <TextInput
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={(password) => setUserDetails({ password })}
                style={styles.inputField}
            />
            <View style={styles.button}>
                <Button
                    title='Sign Up'
                    onPress={onSignUp}
                />
            </View>
            <View style={{ paddingTop: 10 }}>
                <Text>Already have an account? <Text style={{ color: '#2196F3' }} onPress={() => navigation.navigate('Login')}>Log in.</Text></Text>
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
        height: '8%',
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