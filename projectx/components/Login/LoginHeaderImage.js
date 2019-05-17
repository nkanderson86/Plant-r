// required imports and dependencies
import React, { Component } from "react";
import { Image, Icon } from 'react-native-elements';
import { StyleSheet, View } from 'react-native'

// create classful component
export default class LoginHeaderImage extends Component {
    render() {
        return (
            // image
            <View style={styles.container}>
                <Image source={require("../../assets/images/plant.png")} />
            </View>
        );
    }
}

// styling
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        flex: 1,
        resizeMode: 'contain'
    }
});