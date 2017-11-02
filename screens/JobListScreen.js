import * as firebase from 'firebase';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    TouchableHighlight,
    Image,
    ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import NavBar from '../components/NavBar';

export default class JobList extends Component {
    state = {
        jobs: [],
    }

    async componentWillMount() {
        const user = firebase.auth().currentUser;
        const userJobs = firebase.database().ref(`users/${user.uid}/jobs`);
        userJobs.on('value', (snapshot) => {
            const jobs = [];
            snapshot.forEach((childSnapshot) => {
                const item = childSnapshot.val();
                item.key = childSnapshot.key;
                jobs.push(item);
            });
            this.setState({ jobs });
        });
    }

    getJobListItem(job, key) {
        return (
            <View key={key}>
                <View style={styles.jobList_item}>
                    <View style={styles.jobList_item_top}>
                        <Image
                            source={{ uri: `data:image/jpg;base64, ${job.pictures[0]}` }}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.jobList_item_bottom}>
                        <TouchableHighlight
                            underlayColor={Colors.black1}
                            activeOpacity={0.5}
                            style={styles.jobList_item_button}
                            onPress={() => this.props.navigation.navigate('JobDetail')}
                            accessibilityLabel="View job details"
                        >
                            <Feather
                                name="chevrons-right"
                                style={styles.jobList_item_button_icon}
                            />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View>
                <NavBar
                    title="My Jobs"
                    navigation={this.props.navigation}
                    rightButton={
                        <TouchableHighlight
                            underlayColor={Colors.red1}
                            activeOpacity={0.5}
                            onPress={() => this.props.navigation.navigate('Upload')}
                        >
                            <Feather
                                name="plus"
                                style={styles.plus}
                            />
                        </TouchableHighlight>
                    }
                />
                <ScrollView style={{ paddingTop: 2 }}>
                    {this.state.jobs.map((job, key) => this.getJobListItem(job, key))}
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
        flex: 1,
        flexDirection: 'row',
    },
    jobList_item_top: {
        flex: 7,
        padding: 2,
        paddingRight: 0,
        paddingTop: 0,
    },
    jobList_item_bottom: {
        flex: 1,
        padding: 2,
        paddingLeft: 0,
        paddingTop: 0,
    },
    jobList_item_button: {
        flex: 1,
        width: '100%',
        backgroundColor: Colors.red1,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
    },
    jobList_item_button_icon: {
        color: Colors.white1,
        alignSelf: 'center',
        padding: 5,
        fontSize: 30,
    },
    jobList_placeholder: {
        flex: 2,
        borderTopWidth: 0.5,
        borderTopColor: Colors.gray2,
        alignSelf: 'flex-end',
        height: 40,
    },
    plus: {
        fontSize: 30,
        marginTop: 5,
        color: Colors.white1,
        marginRight: 20,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

JobList.propTypes = {
    navigation: PropTypes.object.isRequired,
};
