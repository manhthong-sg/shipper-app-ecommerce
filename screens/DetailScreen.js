import React from 'react'
import { StyleSheet, View ,Button} from 'react-native'

const DetailScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({})
