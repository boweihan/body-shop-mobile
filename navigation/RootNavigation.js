import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
// import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/mdo/LoginScreen';
import ReportListScreen from '../screens/mdo/ReportListScreen';
import ReportScreen from '../screens/mdo/ReportScreen';
import ReportDetailScreen from '../screens/mdo/ReportDetailScreen';
import PropertyListScreen from '../screens/mdo/PropertyListScreen';
import LocationListScreen from '../screens/mdo/LocationListScreen';
import LocationDetailScreen from '../screens/mdo/LocationDetailScreen';
import TestScreen from '../screens/mdo/TestScreen';

import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

const RootStackNavigator = StackNavigator({
    Home: { screen: LoginScreen },
    PropertyList: { screen: PropertyListScreen },
    ReportList: { screen: ReportListScreen },
    Report: { screen: ReportScreen },
    ReportDetail: { screen: ReportDetailScreen },
    LocationList: { screen: LocationListScreen },
    LocationDetail: { screen: LocationDetailScreen },
    Test: { screen: TestScreen },
}, { headerMode: 'screen' });

// const RootStackNavigator = StackNavigator(
//     {
//         Main: {
//             screen: MainTabNavigator,
//         },
//     },
//     {
//         navigationOptions: () => ({
//             headerTitleStyle: {
//                 fontWeight: 'normal',
//             },
//         }),
//     },
// );

export default class RootNavigator extends React.Component {
    componentDidMount() {
        this._notificationSubscription = this._registerForPushNotifications();
    }

    componentWillUnmount() {
        this._notificationSubscription && this._notificationSubscription.remove();
    }

    _registerForPushNotifications() {
        // Send our push token over to our backend so we can receive notifications
        // You can comment the following line out if you want to stop receiving
        // a notification every time you open the app. Check out the source
        // for this function in api/registerForPushNotificationsAsync.js
        registerForPushNotificationsAsync();

        // Watch for incoming notifications
        this._notificationSubscription = Notifications.addListener(this._handleNotification);
    }

    _handleNotification = ({ origin, data }) => {
        console.log( // eslint-disable-line
            `Push notification ${origin} with data: ${JSON.stringify(data)}`,
        );
    };

    render() {
        return <RootStackNavigator />;
    }
}
