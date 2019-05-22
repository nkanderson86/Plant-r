import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from "react-native"

class ViewSchedule extends Component {

    capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    render() {
        return (
            <View>
                {console.log("DAY", this.capitalize(this.props.schedule.day))}
                <Text style={styles.scheduleText}>{this.capitalize(this.props.schedule.day)}   |  {this.props.schedule.time}   |   {this.props.schedule.amount} cups</Text>
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
