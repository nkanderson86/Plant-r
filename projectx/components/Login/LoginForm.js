// required imports and dependencies
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';
import { NavigationActions, withNavigation } from "react-navigation";
import { Button } from "react-native-elements";
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

    goToForgot = () => {
        const navigationAction = NavigationActions.navigate({
            routeName: "Forgot",
        });
        this.props.navigation.dispatch(navigationAction);
    }

    goToSignup = () => {
        const navigationAction = NavigationActions.navigate({
            routeName: "Signup",
        });
        this.props.navigation.dispatch(navigationAction);
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

                <Button onPress={this.login} title="Login" style={styles.loginButton} />


                {/* link to route user to reset password */}
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "grey", marginLeft: 20, marginRight: 10, marginTop: 10 }}
                        onPress={this.goToForgot}>
                        Forgot Password
                     </Text>
                    {/* link to route user to create an account */}
                    <Text style={{ color: "grey", marginTop: 10 }}
                        onPress={this.goToSignup}>
                        Signup
                    </Text>
                </View>
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
        marginLeft: 20,
    },

});