import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import DashboardScreen from '../screens/DashboardScreen';
import EditDeviceScreen from '../screens/EditDeviceScreen';
import SetScheduleScreen from '../screens/SetScheduleScreen';

const DashboardStack = createStackNavigator({
  Dashboard: DashboardScreen,
  EditDevice: EditDeviceScreen,
  SetSchedule: SetScheduleScreen,

});

// creates the tab label at the bottom of the screen, can create more to toggle, here as a placeholder to see if we want to go this route with the design
DashboardStack.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SetScheduleStack = createStackNavigator({
  SetSchedule: SetScheduleScreen,
})

SetScheduleStack.navigationOptions = {
  tabBarLabel: 'Set Schedule',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};


// bottom tabs
export default createBottomTabNavigator({
  DashboardStack,
  // SetScheduleStack,
});
