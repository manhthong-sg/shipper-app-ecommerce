import React from 'react'
import { StyleSheet, View,Button } from 'react-native'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Details')}
                title="Go to details"
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
