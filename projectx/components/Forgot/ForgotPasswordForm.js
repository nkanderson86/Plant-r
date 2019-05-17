// required imports and dependencies
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';
import { NavigationActions, withNavigation } from "react-navigation";
import ResetPasswordButton from "./ResetPasswordButton"

// create classful component
class ForgotPasswordForm extends Component {

    render() {

        return (
            // form for user input
            <Form style={styles.loginContainer}>
                <Item style={styles.loginField} floatingLabel last>
                    <Label>Username</Label>
                    <Input />
                </Item>
                {/* button to route user, add login on component to trigger reset password */}
                <ResetPasswordButton />
            </Form>
        );
    }
}

// export component withNavigation method which will pass props
export default withNavigation(ForgotPasswordForm);

// styling
const styles = StyleSheet.create({
    loginContainer: {
        marginTop: 20,
    },

    loginField: {
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20
    },

});