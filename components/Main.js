import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FeedScreen from './main/Feed';
import SearchScreen from './main/Search';
import EmptyScreen from './main/Add';
import ProfileScreen from './main/Profile';

const Tab = createMaterialBottomTabNavigator();

export default function Main({ navigation }) {

    return (
        <Tab.Navigator initialRouteName='Feed' labeled={false} activeColor='#000000' barStyle={{ backgroundColor: '#FFFFFF' }}>
            <Tab.Screen name='Feed' component={FeedScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='home' color={color} size={26} />
                    ),
                }} />
            <Tab.Screen name='Search' component={SearchScreen} navigation={navigation}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='magnify' color={color} size={26} />
                    ),
                }} />
            <Tab.Screen name='AddContainer' component={EmptyScreen}
                // listeners={({ navigation }) => ({
                //     tabPress: event => {
                //         event.preventDefault();
                //         navigation.navigate('Add')
                //     }
                // })}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='plus-box-outline' color={color} size={26} />
                    ),
                }} />
            <Tab.Screen name='Profile' component={ProfileScreen}
                // listeners={({ navigation }) => ({
                //     tabPress: event => {
                //         event.preventDefault();
                //         navigation.navigate('Profile', { uid: firebase.auth().currentUser.uid })
                //     }
                // })}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name='account-circle' color={color} size={26} />
                    ),
                }} />
        </Tab.Navigator>
    );
}
