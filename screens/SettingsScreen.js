import React from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'

const SettingsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
            <Text>Settings Screen</Text>
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
      },
})
