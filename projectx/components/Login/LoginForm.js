// required imports and dependencies
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';
import { NavigationActions, withNavigation } from "react-navigation";
import { Button } from 'react-native-elements';
// import LoginButton from "./LoginButton"
import ForgotPasswordButton from "../Forgot/ForgotPasswordButton"
import SignupButton from "../Signup/SignupButton"
import API from '../../utils/API';

// create classful component
class LoginForm extends Component {

    state = {
        username: '',
        password: ''

    }

    goToMain = () => {
        const navigateAction = NavigationActions.navigate({
            routeName: "Home",
        });
        this.props.navigation.dispatch(navigateAction);
    }

    goToDashboard = (userObj) => {
        const navigateAction = NavigationActions.navigate({
            routeName: "Dashboard",
            params: { data: userObj }
        });
        this.props.navigation.dispatch(navigateAction);
    }

    login = () => {
        const { username, password } = this.state
        const userObj = { username, password }

        API.login(userObj)
            .then(res => {
                this.goToDashboard(res.data)
            })
            .catch(err => {
                console.log('LOGIN ERROR: ', err)
                alert("Incorrect Username or Password!")
            })

    }

    render() {

        return (
            // form for user input
            <Form style={styles.loginContainer}>
                <Item style={styles.loginField} floatingLabel last>
                    <Label>Username</Label>
                    <Input onChangeText={(value) => this.setState({ username: value })} />
                </Item>
                <Item style={styles.loginField} floatingLabel last>
                    <Label>Password</Label>
                    <Input secureTextEntry={true} onChangeText={(value) => this.setState({ password: value })} />
                </Item>
                {/* button to route user, if authenticated, to dashboard, input login in component to check auth */}
                <Button onPress={this.login} style={styles.loginButton} title="Login" />
                {/* button to route user to reset password */}
                <ForgotPasswordButton title="Forgot" />
                {/* button to route user to create an account */}
                <SignupButton />
            </Form>
        );
    }
}
// export component withNavigation method which will pass props
export default withNavigation(LoginForm);

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

    loginButton: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20
    },

});