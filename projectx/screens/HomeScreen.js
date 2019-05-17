// required imports and dependencies
import React, { Component } from 'react';
import { ScrollView } from "react-native";
import { Container, Content } from 'native-base';
import LoginForm from "../components/Login/LoginForm"
import LoginHeaderImage from "../components/Login/LoginHeaderImage"
import { withNavigation } from 'react-navigation';

// create classful component
class HomeScreen extends Component {
  // title for screen
  static navigationOptions = {
    title: "PLANT'R",
  };

  render() {
    return (
      // container for components
      <Container>

        {/* icon/logo */}
        <ScrollView>
          <LoginHeaderImage />
          {/* login form component */}
          <Content>
            <LoginForm />
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

// export component withNavigation method which will pass props
export default withNavigation(HomeScreen);