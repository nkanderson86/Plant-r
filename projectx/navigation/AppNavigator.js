import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import AuthNavigator from './AuthNavigator';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  // home,links, settings
  Main: MainTabNavigator,
  // for auth add it and need to create it, aauth navigator will have login screen signup, reset
  // login, and sign up screen, and reset password screen
  Auth: AuthNavigator
},
  {
    initialRouteName: "Auth"
  }
));