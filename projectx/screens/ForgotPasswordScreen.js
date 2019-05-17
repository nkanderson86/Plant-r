// required imports and dependencies
import React, { Component } from 'react';
import { ScrollView } from "react-native";
import { Container, Content } from 'native-base';
import ForgotPasswordForm from "../components/Forgot/ForgotPasswordForm"
import LoginHeaderImage from "../components/Login/LoginHeaderImage"
import { withNavigation } from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome';

// create classful component
class ForgotPasswordScreen extends Component {
    // title for screen
    static navigationOptions = {
        title: 'Forgot Password',
    };

    render() {

        return (
            // container for components
            <Container>
                <ScrollView>
                    {/* icon/logo */}
                    <LoginHeaderImage />
                    {/* forgot password form component */}
                    <Content>
                        <ForgotPasswordForm />
                    </Content>
                </ScrollView>
            </Container>
        );
    }
}

// export component withNavigation method which will pass props
export default withNavigation(ForgotPasswordScreen);