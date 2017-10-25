import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import PropTypes from 'prop-types';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default TabNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Links: {
            screen: LinksScreen,
        },
        Settings: {
            screen: SettingsScreen,
        },
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => { // eslint-disable-line
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                case 'Home':
                    iconName = Platform.OS === 'ios'
                        ? `ios-information-circle${focused ? '' : '-outline'}`
                        : 'md-information-circle';
                    break;
                case 'Links':
                    iconName = Platform.OS === 'ios'
                        ? `ios-link${focused ? '' : '-outline'}`
                        : 'md-link';
                    break;
                case 'Settings':
                    iconName = Platform.OS === 'ios'
                        ? `ios-options${focused ? '' : '-outline'}`
                        : 'md-options';
                    break;
                default: break;
                }
                return (
                    <Ionicons
                        name={iconName}
                        size={28}
                        style={{ marginBottom: -3 }}
                        color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                    />
                );
            },
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    },
);

TabNavigator.propTypes = {
    focused: PropTypes.bool,
};

