import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
            <Text>Profile Screen</Text>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
      },
})
