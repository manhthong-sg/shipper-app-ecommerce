import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import DrawerNavigation from './DrawerNavigation';

const Stack = createStackNavigator();
const screenOptions = {
    headerShown: false,
}
const NormalNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={screenOptions}>
            <Stack.Screen name='Login' component={Login} screenOptions={screenOptions} />
            <Stack.Screen name='Home' component={DrawerNavigation} screenOptions={screenOptions} />
        </Stack.Navigator>
    )
}

export default NormalNavigation

const styles = StyleSheet.create({})
