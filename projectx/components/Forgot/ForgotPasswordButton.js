// required imports and dependencies
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationActions, withNavigation } from "react-navigation";

// create classful component
class ForgotPasswordButton extends Component {

    // method to route to another screen
    goToForgot = () => {
        const navigationAction = NavigationActions.navigate({
            routeName: "Forgot",
        });
        this.props.navigation.dispatch(navigationAction);
    }

    render() {
        // button with logic to call method to route to another screen 
        return (
            <Button onPress={this.goToForgot} style={styles.forgotPasswordButton} title="Forgot password"
            />
        );
    }
}

// export component withNavigation method which will pass props
export default withNavigation(ForgotPasswordButton);

// styling
const styles = StyleSheet.create({
    forgotPasswordButton: {
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20
    },
});