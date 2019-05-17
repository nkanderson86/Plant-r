import React, { Component } from 'react';
import { StyleSheet, View, Container, Text } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { NavigationActions, withNavigation } from "react-navigation";
import { CheckBox } from 'react-native-elements';
import LoginHeaderImage from "../Login/LoginHeaderImage";
// import API from '../../utils/API'
import UserSetup from '../userAuthListener'

// put  device id in state and hide it from user and then populate 
class DeviceRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Name', 'Device ID', 'Status', 'Edit'],
            tableData: [
            ],
            UID: props.navigation.state.params.data.UID,
            page: "dashboard"
        }
    }

    componentDidMount() {
        // inceptor to add userId to headers in order to make API calls as an authenticated user.  UserSetup also has an API call to retrieve all the arduinos for the account that will then be displayed to user on a table. 
        const setState = this.setState.bind(this)
        let pusher = UserSetup(this.state.UID, setState, this.state.page)
        this.setState({ pusher: pusher })
        // this.statusColors(this.state.tableData[2]);
    }

    statusColors = (status) => {
        switch (status) {
            case 0:
                style = { backgroundColor: "green" }
                break;
            case 1:
                style = { backgroundColor: "red" }
                break;

            case 2:
                style = { backgroundColor: "yellow" }
                break;
            default:
                break;
        }
    }


    componentWillUnmount() {
        this.state.pusher.disconnect()
        // console.log('disconnect')
    }

    goToEditDevice(index) {
        // console.log(index);
        const navigationAction = NavigationActions.navigate({
            routeName: "EditDevice",
            params: { name: this.state.tableData[index][0], UID: this.state.UID, deviceId: this.state.tableData[index][1], data: this.props.navigation.state.params.data }
        });
        this.props.navigation.dispatch(navigationAction);
    }

    render() {
        const state = this.state;

        return (

            < View style={styles.container} >
                <LoginHeaderImage />
                <Table borderStyle={{ borderColor: 'black' }} style={{ marginTop: 20 }}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                    {
                        state.tableData.map((rowData, index) => (
                            <TableWrapper key={index} style={styles.row}>
                                {
                                    rowData.map((cellData, cellIndex) => {
                                        console.log("CELL DATA", cellData)
                                        return (
                                            <Cell key={cellIndex} data={cellIndex === 3 ? <CheckBox center iconType='material' uncheckedIcon='add' checked={this.state.checked} onPress={() => this.goToEditDevice(index)} /> : (cellIndex === 2 && cellData === 0) ? <Text style={{ color: "green" }} >Good </Text> : (cellIndex === 2 && cellData === 1) ? <Text style={{ color: "red" }} >Err </Text> : (cellIndex === 2 && cellData === 2) ? <Text>Unassigned </Text> : cellData} textStyle={styles.text} />
                                        )
                                    }
                                    )
                                }
                            </TableWrapper>
                        ))
                    }
                </Table>
            </View >

        )
    }
}

export default withNavigation(DeviceRow);

const styles = StyleSheet.create({
    container: { flex: 1, marginLeft: 10, marginRight: 10, marginTop: 0, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#FFFFFF' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#E8E8E8' },

    statusGood: {
        backgroundColor: "green"
    },

    statusError: {

    },

    statusNew: {

    }

});