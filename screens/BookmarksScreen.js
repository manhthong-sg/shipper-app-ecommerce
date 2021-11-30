import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native'

const BookmarkScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
            <Text>Bookmark Screen</Text>
        </View>
    )
}

export default BookmarkScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
      },
})
