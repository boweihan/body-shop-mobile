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

export default class JobList extends Component {
    navigate = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View>
                <View style={styles.jobList_item}>
                    <TouchableHighlight
                        underlayColor={Colors.red1}
                        activeOpacity={0.5}
                        style={styles.jobList_item_button}
                        onPress={this.navigate}
                        accessibilityLabel="Contact Button"
                    >
                        <Text style={styles.jobList_item_button_text}>
                            View Job
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.jobList_item_tag}>
                    <TouchableHighlight
                        underlayColor={Colors.red1}
                        activeOpacity={0.5}
                        style={styles.jobList_item_tag_button}
                        onPress={this.navigate}
                        accessibilityLabel="Contact Button"
                    >
                        <Text style={styles.jobList_item_tag_button_text}>
                            View Bid
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    jobList_item: {
        width: Layout.window.width,
        height: Layout.window.height * 0.4,
        backgroundColor: Colors.red1,
        justifyContent: 'flex-end',
    },
    jobList_item_tag: {
        width: Layout.window.width,
        height: Layout.window.height * 0.1,
        backgroundColor: Colors.gray1,
        justifyContent: 'flex-end',
    },
    jobList_item_button: {
        width: Layout.window.width * 0.5,
        backgroundColor: Colors.blue1,
        alignSelf: 'flex-end',
    },
    jobList_item_tag_button: {
        width: Layout.window.width * 0.5,
        backgroundColor: Colors.green1,
        alignSelf: 'flex-end',
    },
    jobList_item_button_text: {
        textAlign: 'center',
        color: Colors.white1,
        fontWeight: 'bold',
        fontSize: 20,
    },
    jobList_item_tag_button_text: {
        textAlign: 'center',
        color: Colors.white1,
        fontWeight: 'bold',
        fontSize: 20,
    },
});

JobList.propTypes = {
    navigation: PropTypes.object.isRequired,
};
