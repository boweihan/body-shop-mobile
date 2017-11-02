import * as firebase from 'firebase';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    TouchableHighlight,
    Text,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

const firebaseConfig = {
    apiKey: 'AIzaSyCObkyhfqQMdrX9ksfDL0oR9tvy1WfNJFk',
    authDomain: 'adaptbox-90580.firebaseapp.com',
    databaseURL: 'https://adaptbox-90580.firebaseio.com',
    projectId: 'adaptbox-90580',
    storageBucket: 'adaptbox-90580.appspot.com',
    messagingSenderId: '785163518370',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class Login extends Component {
    login = () => {
        const email = 'bowei.han100@gmail.com';
        const password = 'password';
        if (email != null && password != null) {
            firebaseApp.auth().signInWithEmailAndPassword(email, password).then((userData) => {
                console.log(userData);
                this.props.navigation.navigate('JobList');
            });
        }
    }

    render() {
        return (
            <View style={styles.login_background}>
                <TouchableHighlight
                    underlayColor={Colors.red1}
                    activeOpacity={0.5}
                    style={styles.login_button}
                    onPress={this.login}
                    accessibilityLabel="Login Button"
                >
                    <MaterialCommunityIcons
                        name="car-convertable"
                        style={styles.login_icon}
                    />
                </TouchableHighlight>
                <View style={styles.outerCircle1} />
                <View style={styles.outerCircle2} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    login_background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.red1,
    },
    login_button: {
        position: 'absolute',
        backgroundColor: Colors.white1,
        width: Layout.window.height * 0.3,
        height: Layout.window.height * 0.3,
        borderRadius: Layout.window.height * 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 3,
    },
    outerCircle1: {
        position: 'absolute',
        backgroundColor: Colors.white1,
        width: Layout.window.height * 0.4,
        height: Layout.window.height * 0.4,
        borderRadius: Layout.window.height * 0.4,
        zIndex: 2,
        opacity: 0.5,
    },
    outerCircle2: {
        position: 'absolute',
        backgroundColor: Colors.white1,
        width: Layout.window.height * 0.5,
        height: Layout.window.height * 0.5,
        borderRadius: Layout.window.height * 0.5,
        zIndex: 1,
        opacity: 0.2,
    },
    login_icon: {
        fontSize: 50,
        color: Colors.red1,
    },
});

Login.propTypes = {
    navigation: PropTypes.object.isRequired,
};
