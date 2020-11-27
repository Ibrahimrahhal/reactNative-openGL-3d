import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GetStartedSwiper from '../screens/GetStartedSwiper';
import LoginSignUp from '../screens/LoginSignUp';
const Stack = createStackNavigator();

class HomeNavigator extends Component {
    render() {
        return (
        <Stack.Navigator initialRouteName={'GetStarted'} mode={'modal'} headerMode={'none'}>
            <Stack.Screen name="GetStarted" component={GetStartedSwiper} />
            <Stack.Screen name="Login" component={LoginSignUp} />
        </Stack.Navigator>
        );
    }
}

export default HomeNavigator;