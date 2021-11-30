import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native'

const SupportScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
            <Text>Support Screen</Text>
        </View>
    )
}

export default SupportScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
