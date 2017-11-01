import * as firebase from 'firebase';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    TouchableHighlight,
    Text,
} from 'react-native';
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
                    <Text style={styles.login_button_text}>
                        Enter
                    </Text>
                </TouchableHighlight>
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
        backgroundColor: Colors.white1,
        width: Layout.window.width,
        padding: 20,
    },
    login_button_text: {
        textAlign: 'center',
        color: Colors.red1,
        fontSize: 20,
        fontFamily: 'os extra bold',
    },
});

Login.propTypes = {
    navigation: PropTypes.object.isRequired,
};
