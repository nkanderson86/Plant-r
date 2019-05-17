// required imports and dependencies
import React, { Component } from 'react';
import { Container } from 'native-base';
import { ScrollView } from "react-native";
import { withNavigation } from 'react-navigation';
import SetScheduleForm from "../components/SetSchedule/SetScheduleForm";

// create classful component
class SetScheduleScreen extends Component {
    // title for screen
    static navigationOptions = {
        title: 'Edit Device',
    };

    render() {

        return (
            // container for components
            <Container>
                <ScrollView>
                    <SetScheduleForm />
                </ScrollView>
            </Container>

        );
    }
}

// export component withNavigation method which will pass props
export default withNavigation(SetScheduleScreen);