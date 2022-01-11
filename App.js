import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DrawerNavigation from './navigations/DrawerNavigation';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import NormalNavigation from './navigations/NormalNavigation';

export default function App({ route, navigation }) {
  const [isLogin, setIsLogin] = useState(false)
  return (
    // <DrawerNavigation/>
    <NavigationContainer>
      {/* {isLogin == true ?
        (<DrawerNavigation />)
        :
        (<NormalNavigation />)
      } */}
      <NormalNavigation/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
