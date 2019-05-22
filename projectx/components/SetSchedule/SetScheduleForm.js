// required imports and dependencies
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { Container, Form, Item, Input, Label } from 'native-base';
import { withNavigation, NavigationActions } from 'react-navigation';
import AddScheduleModal from "./SetScheduleModal"
import ViewSchedule from "./ViewSchedule"
import UserSetup from '../userAuthListener';
import API from '../../utils/API';

// create classful component
class SetScheduleForm extends Component {
    // title for screen
    static navigationOptions = {
        title: 'Edit Device'
    };

    state = {
        schedule: this.props.navigation.state.params.editSchedule.map(element => {
            return { amount: element.amount, day: element.day, time: element.time }
        }),
        editSchedule: this.props.navigation.state.params.editSchedule,
        plantName: this.props.navigation.state.params.name,
        deviceId: this.props.navigation.state.params.deviceId,
        UID: this.props.navigation.state.params.UID,
        page: "setSchedule"
    }

    componentDidMount() {
        const setState = this.setState.bind(this)
        UserSetup(this.state.UID, setState, this.state.page, this.state.deviceId)
    }
    // componentDidUpdate() {
    //     console.log(this.state.plantName)
    // }

    addToSchedule = (newSchedule) => {
        let addedSchedule = this.state.schedule.map(a => a)
        addedSchedule.push(newSchedule)
        this.setState({
            schedule: addedSchedule
        })
    }

    handleDelete = (index) => {
        let schedule = this.state.schedule
        schedule.splice(index, 1);
        this.setState({
            schedule: schedule
        });
    }

    saveSchedule = () => {
        console.log(this.state.deviceId)
        let { deviceId, plantName, schedule } = this.state
        console.log("plant: ", plantName)
        plantName = plantName.name ? plantName.name : plantName;
        const ardObj = { deviceId: deviceId.deviceId, plantName: plantName, schedule: schedule }
        console.log("ardObj", ardObj)
        API.updateArduino(ardObj)
            .then(res => {
                alert("Schedule Updated")
                console.log("API Sent")
            })
            .catch(err => console.log('LOGIN ERROR: ', err))

        const navigateAction = NavigationActions.navigate({
            routeName: "EditDevice",
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {

        return (
            // container for components
            <Container>
                <Form style={styles.addDeviceContainer}>
                    <Item style={styles.addDeviceField} stackedLabel last>
                        <Label>Device ID</Label>
                        <Input editable={false} value={this.state.deviceId.deviceId} />
                    </Item>
                    <Item style={styles.addDeviceField} stackedLabel last>
                        <Label>Edit Device Name</Label>
                        <Input
                            value={this.state.plantName.name}
                            onChangeText={(value) => this.setState({ plantName: value })} />
                    </Item>
                    {/* button to route user, input logic to create account on component CreateAccountButton.js */}
                </Form>

                <View>
                    <Button title="Save Changes" style={styles.saveScheduleButton} onPress={this.saveSchedule} />
                </View>

                <View style={styles.addScheduleModal}>
                    <AddScheduleModal addToSchedule={this.addToSchedule} />
                </View>
                <ScrollView>
                    <View>
                        {this.state.schedule.map((a, i) => <ViewSchedule handleDelete={this.handleDelete} schedule={a} key={i} data_id={i} />)}
                    </View>
                </ScrollView>
            </Container >

        );
    }
}

// export component withNavigation method which will pass props
export default withNavigation(SetScheduleForm);

const styles = StyleSheet.create({
    addDeviceContainer: {
        marginTop: 20,
    },

    addDeviceField: {
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20
    },

    addScheduleModal: {
        alignContent: "center"
    },

    scheduleModalButton: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20
    },

    addDeviceSaveButton: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20
    },

    saveScheduleButton: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20
    },
});