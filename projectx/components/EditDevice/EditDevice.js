// required imports and dependencies
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from "react-native-elements";
import { Container, Form, Item, Input, Label } from 'native-base';
import { withNavigation, NavigationActions } from 'react-navigation';
import UserSetup from '../userAuthListener';

// create classful component
class EditDeviceForm extends Component {

    state = {
        name: this.props.navigation.state.params.name,
        deviceId: this.props.navigation.state.params.deviceId,
        UID: this.props.navigation.state.params.UID,
        data: this.props.navigation.state.params.data,
        page: "editDevice",
        scheduleData: []
    }

    componentDidMount() {
        this.props.navigation.addListener('willFocus', async (route) => {
            const setState = this.setState.bind(this)
            await UserSetup(this.state.UID, setState, this.state.page, this.state.deviceId)
            // console.log("SCHEDULE", this.state.scheduleData)
            // this.handleNewSchedule()
        })
        // inceptor to add userId to headers in order to make API calls as an authenticated user.  UserSetup also has an API call to retrieve all the arduinos for the account that will then be displayed to user on a table. 

    }

    goToSetSchedule = (userObj) => {
        const { scheduleData, name, deviceId, UID } = this.state
        const editSchedule = { scheduleData }
        const editName = { name }
        const editDeviceId = { deviceId }
        const navigateAction = NavigationActions.navigate({
            routeName: "SetSchedule",
            params: { data: userObj, editSchedule: editSchedule.scheduleData, name: editName, deviceId: editDeviceId, UID: UID }
        });
        // console.log("USEROBJ", this.state)

        this.props.navigation.dispatch(navigateAction);
    }

    capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    render() {
        return (
            <ScrollView>
                <Container>
                    <Form style={styles.editDeviceContainer}>
                        <Item style={styles.editDeviceField} stackedLabel last>
                            <Label>Device ID</Label>
                            <Input editable={false} value={this.state.deviceId} />
                        </Item>
                        <Item style={styles.editDeviceField} stackedLabel last>
                            <Label>Device Name</Label>
                            <Input editable={false} value={this.state.name} />
                        </Item>
                    </Form>
                    <View>
                        <Button title="Edit Device" style={styles.setScheduleButton} onPress={this.goToSetSchedule} />
                    </View>
                    <View>
                        <Text style={{ textAlign: "center", fontSize: 18, marginTop: 20, textDecorationLine: "underline" }}>
                            Device Schedule
                        </Text>
                    </View>
                    <ScrollView>
                        <View >
                            {
                                this.state.scheduleData ? this.state.scheduleData.map((sch, i) => {
                                    return (
                                        <View key={i}>
                                            <Text style={styles.viewScheduleText} >{this.capitalize(`${sch.day}`)}   |   {`${sch.time}`}   |   {`${sch.amount} cups`}</Text>
                                        </View>)
                                }
                                )
                                    : null}
                        </View>
                    </ScrollView>
                </Container>
            </ScrollView>

        );
    }
}

// export component withNavigation method which will pass props
export default withNavigation(EditDeviceForm);

const styles = StyleSheet.create({
    editDeviceContainer: {
        marginTop: 20,
    },

    editDeviceField: {
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20
    },

    setScheduleButton: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20
    },

    viewScheduleText: {
        textAlign: "center",
        fontSize: 20,
        marginTop: 20
    }

});