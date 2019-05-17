// required imports and dependencies
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationActions, withNavigation } from "react-navigation";

// create classful component
class ResetPasswordButton extends Component {

    // method to route to another screen
    resetPassword = () => {
        const navigationAction = NavigationActions.navigate({
            routeName: "Home",
        });
        this.props.navigation.dispatch(navigationAction);
    }

    render() {
        // button with logic to call method to route to another screen 
        return (
            <Button onPress={this.resetPassword} style={styles.resetPassword} title="Reset password"
            />
        );
    }
}

// export component withNavigation method which will pass props
export default withNavigation(ResetPasswordButton);

// styling
const styles = StyleSheet.create({
    resetPassword: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20
    },
});