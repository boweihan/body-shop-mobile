import * as firebase from 'firebase';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    TouchableHighlight,
    Text,
    ScrollView,
} from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import NavBar from '../components/NavBar';

export default class JobList extends Component {
    render() {
        const jobListView = (
            <View>
                <View style={styles.jobList_item}>
                    <View style={styles.jobList_placeholder} />
                    <TouchableHighlight
                        underlayColor={Colors.white1}
                        activeOpacity={0.5}
                        style={styles.jobList_item_button}
                        onPress={() => this.props.navigation.navigate('JobDetail')}
                        accessibilityLabel="Contact Button"
                    >
                        <Text style={styles.jobList_item_button_text}>
                            VIEW JOB
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.jobList_item_tag}>
                    <TouchableHighlight
                        underlayColor={Colors.red1}
                        activeOpacity={0.5}
                        style={styles.jobList_item_tag_button}
                        onPress={() => this.props.navigation.navigate('BidDetail')}
                        accessibilityLabel="Contact Button"
                    >
                        <Text style={styles.jobList_item_tag_button_text}>
                            VIEW BID
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={Colors.red1}
                        activeOpacity={0.5}
                        style={styles.jobList_item_tag_button}
                        onPress={() => this.props.navigation.navigate('Upload')}
                        accessibilityLabel="Contact Button"
                    >
                        <Text style={styles.jobList_item_tag_button_text}>
                            UPLOAD SOMETHING
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
        return (
            <View>
                <NavBar title="Job List" navigation={this.props.navigation} />
                <ScrollView>
                    {jobListView}
                    {jobListView}
                    {jobListView}
                    {jobListView}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    jobList_item: {
        width: Layout.window.width,
        height: Layout.window.height * 0.3,
        backgroundColor: Colors.white1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    jobList_item_button: {
        flex: 1,
        height: 60,
        backgroundColor: Colors.red1,
        borderTopWidth: 0.5,
        borderTopColor: Colors.gray2,
        alignSelf: 'flex-end',
        borderTopLeftRadius: 30,
    },
    jobList_item_button_text: {
        lineHeight: 60,
        alignSelf: 'center',
        color: Colors.white1,
        fontWeight: '600',
    },
    jobList_item_tag: {
        width: Layout.window.width,
    },
    jobList_item_tag_button: {
        flex: 1,
        height: 40,
        width: Layout.window.width - 10,
        backgroundColor: Colors.black1,
        margin: 5,
        alignSelf: 'flex-end',
    },
    jobList_item_tag_button_text: {
        alignSelf: 'center',
        color: Colors.white1,
        fontWeight: '600',
        lineHeight: 40,
    },
    jobList_placeholder: {
        flex: 2,
        borderTopWidth: 0.5,
        borderTopColor: Colors.gray2,
        alignSelf: 'flex-end',
        height: 60,
    },
});

JobList.propTypes = {
    navigation: PropTypes.object.isRequired,
};
