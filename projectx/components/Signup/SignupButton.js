// required imports and dependencies
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationActions, withNavigation } from "react-navigation";

// create classful component
class SignupButton extends Component {

    // method to route to another screen
    goToSignup = () => {
        const navigationAction = NavigationActions.navigate({
            routeName: "Signup",
        });
        this.props.navigation.dispatch(navigationAction);
    }

    render() {
        // button with logic to call method to route to another screen 
        return (
            <Button onPress={this.goToSignup} style={styles.signupButton} title="Signup"
            />
        );
    }
}

// export component withNavigation method which will pass props
export default withNavigation(SignupButton);

// styling
const styles = StyleSheet.create({
    signupButton: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20
    },
});