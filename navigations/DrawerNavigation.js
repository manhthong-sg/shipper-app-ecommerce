import React from 'react'
import { StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen'
import DrawerContent from './DrawerContent';
const Drawer = createDrawerNavigator();

const DrawerNavigation = ({ navigation }) => {  
    return (
        <NavigationContainer headerMode= 'none'>
            <Drawer.Navigator  styles={styles.navigation_css} initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Details" component={DetailScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigation

const styles = StyleSheet.create({
    navigation_css:{
        backgroundColor:'#009387'
    }
})

