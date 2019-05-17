import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from "react-native"

class ViewSchedule extends Component {

    render() {
        return (
            <View>
                <Text style={styles.scheduleText}>{this.props.schedule.day}   |  {this.props.schedule.time}   |   {this.props.schedule.amount} cups</Text>
                <Button title="Delete" onPress={() => this.props.handleDelete(this.props.data_id)} />
            </View>


        )
    }
}

export default ViewSchedule;

const styles = StyleSheet.create({
    scheduleText: {
        textAlign: "center",
        fontSize: 20,
        marginTop: 20
    }
})
