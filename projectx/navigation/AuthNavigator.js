import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import SignupScreen from '../screens/SignupScreen';

const HomeStack = createStackNavigator({
    // Home is our route
    // we can use navigation actions to route to home route or other routes., 
    // like add device page
    Home: HomeScreen,
    Signup: SignupScreen,
    Forgot: ForgotPasswordScreen,
});

export default HomeStack;
