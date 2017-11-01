import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import JobListScreen from '../screens/JobListScreen';
import JobDetailScreen from '../screens/JobDetailScreen';
import UploadScreen from '../screens/UploadScreen';
import BidDetailScreen from '../screens/BidDetailScreen';

import registerForPushNotificationsAsync from '../libs/registerForPushNotificationsAsync';

// Main App
const RootStackNavigator = StackNavigator({
    Home: { screen: LoginScreen },
    JobList: { screen: JobListScreen },
    JobDetail: { screen: JobDetailScreen },
    Upload: { screen: UploadScreen },
    BidDetail: { screen: BidDetailScreen },
}, { headerMode: 'none' });

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
        // for this function in libs/registerForPushNotificationsAsync.js
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
