import React, { Component } from 'react';
import { Modal, View, Alert, StyleSheet, Picker, DatePickerIOS, Text } from 'react-native';
import { Button } from 'react-native-elements';
import TimePicker from "react-native-24h-timepicker";

class AddScheduleModal extends Component {

    state = {
        modalVisible: false,
        switchValue: false,
        day: "Monday",
        amount: "0.25",
        time: "10:00"
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    setSchedule = () => {
        const { day, amount, time } = this.state
        const newSchedule = { day, amount, time }
        console.log("NEW SCHEDULE: ", newSchedule)
        this.props.addToSchedule(newSchedule);

        this.setModalVisible(!this.state.modalVisible);
    }

    onCancel() {
        this.TimePicker.close();
    }

    onConfirm(hour, minute) {
        this.setState({ time: `${hour}:${minute}` });
        this.TimePicker.close();
    }

    render() {

        return (
            <View >
                <Modal
                    animationType="fade"
                    presentationStyle="fullScreen"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View>


                        <View style={styles.inputFlex}>
                            <View style={styles.modalPickerDay}>
                                <Picker
                                    selectedValue={this.state.day}
                                    onValueChange={(dayValue, itemIndex) =>
                                        this.setState({ day: dayValue })
                                    }>
                                    <Picker.Item label="Monday" value="Monday" />
                                    <Picker.Item label="Tuesday" value="Tuesday" />
                                    <Picker.Item label="Wednesday" value="Wednesday" />
                                    <Picker.Item label="Thursday" value="Thursday" />
                                    <Picker.Item label="Friday" value="Friday" />
                                    <Picker.Item label="Saturday" value="Saturday" />
                                    <Picker.Item label="Sunday" value="Sunday" />
                                </Picker>

                            </View>
                            <View style={styles.modalPickerWaterAmount}>
                                <Picker
                                    selectedValue={this.state.amount}
                                    onValueChange={(waterAmountValue, itemIndex) =>
                                        this.setState({ amount: waterAmountValue })
                                    }>
                                    <Picker.Item label="0.25 cup" value="0.25" />
                                    <Picker.Item label="0.5 cup" value="0.5" />
                                    <Picker.Item label="1 cup" value="1" />
                                    <Picker.Item label="1.5 cups" value="1.5" />
                                    <Picker.Item label="2 cups" value="2" />
                                    <Picker.Item label="2.5 cups" value="2.5" />
                                    <Picker.Item label="3 cups" value="3" />
                                    <Picker.Item label="3.5 cups" value="3.5" />
                                    <Picker.Item label="4 cups" value="4" />
                                </Picker>
                            </View>
                        </View>

                        <View style={styles.timePicker}>
                            <Text style={styles.text}>Selected Time | {this.state.time}</Text>
                            <Button
                                style={styles.saveModalButton}
                                title="Choose Time"
                                onPress={() => this.TimePicker.open()}
                            >
                            </Button>

                            <TimePicker
                                ref={ref => {
                                    this.TimePicker = ref;
                                }}
                                onCancel={() => this.onCancel()}
                                onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
                            />
                        </View>

                        <View style={styles.buttonsContainer}>
                            <Button title="Save" style={styles.saveModalButton} onPress={this.setSchedule} />
                            {/* <Button title="Cancel" style={styles.saveModalButton} onPress={this.setModalVisible(!this.state.modalVisible)} /> */}

                            <Button title="Cancel" style={styles.saveModalButton} onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }} />
                        </View>

                    </View>
                </Modal>

                <Button title="Add To Schedule" style={styles.showModalButton} onPress={() => {
                    this.setModalVisible(true);
                }} />
            </View >
        );
    }
}
export default AddScheduleModal;

const styles = StyleSheet.create({

    modalImage: {
        marginTop: 80
    },

    showModalButton: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20
    },

    inputFlex: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "stretch",
        marginTop: 100,
        marginLeft: 20,
        marginRight: 20
    },

    modalPickerDay: {
        height: 50,
        width: 80,
        marginLeft: 0,
        marginRight: 5
    },

    modalPickerWaterAmount: {
        height: 50,
        width: 100,
        marginLeft: 5,
        marginRight: 5
    },

    modalPickerTime: {
        height: 50,
        width: 80,
        marginLeft: 5,
        marginRight: 0
    },

    buttonsContainer: {
        marginTop: 50,
    },

    timePicker: {
        marginTop: 200,
        alignItems: "center"
    },

    saveModalButton: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20

    },
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 100
    },
    text: {
        fontSize: 20,
        marginTop: 10
    },
    button: {
        backgroundColor: "grey",
        paddingVertical: 11,
        paddingHorizontal: 17,
        borderRadius: 3,
        marginVertical: 50
    },
    buttonText: {
        color: "black",
        fontSize: 16,
        fontWeight: "600"
    }

});