import React from 'react'
import { StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen'
import DrawerContent from './DrawerContent';
import SupportScreen from '../screens/SupportScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BookmarksScreen from '../screens/BookmarksScreen';
const Drawer = createDrawerNavigator();

const DrawerNavigation = ({ navigation }) => {  
    return (
        <NavigationContainer>
            <Drawer.Navigator  drawerContent={props=><DrawerContent {...props}/>}>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Settings" component={SettingsScreen} />
                <Drawer.Screen name="Profile" component={ProfileScreen} />
                <Drawer.Screen name="Support" component={SupportScreen} />
                <Drawer.Screen name="Bookmarks" component={BookmarksScreen} />
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

