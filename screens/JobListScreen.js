import * as firebase from 'firebase';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    TouchableHighlight,
    Image,
    ScrollView,
    Text,
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
            <View key={key} style={{ padding: 2 }}>
                <View style={styles.jobList_item}>
                    <TouchableHighlight
                        underlayColor={Colors.black1}
                        activeOpacity={0.5}
                        style={styles.jobList_item_top}
                        onPress={() => this.props.navigation.navigate('JobDetail', { job })}
                        accessibilityLabel="View job details"
                    >
                        <View style={styles.jobList_item_inner}>
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Image
                                    source={{ uri: `data:image/jpg;base64, ${job.pictures[0]}` }}
                                    style={styles.image}
                                />
                            </View>
                            <View style={{ flex: 2, justifyContent: 'center', paddingRight: 20 }}>
                                <View style={{ flex: 1 }} />{/* placeholder */}
                                <Text style={[{ flex: 2 }, styles.text1]}>{`${job.firstName} ${job.lastName}`}</Text>
                                <Text style={[{ flex: 2 }, styles.text2]}>{`${job.year} ${job.make} ${job.model}`}</Text>
                                <Text style={[{ flex: 2 }, styles.text3]}>{`Bids: 3`}</Text>
                                <View style={{ flex: 1 }} />{/* placeholder */}
                            </View>
                        </View>
                    </TouchableHighlight>
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
                <ScrollView style={{ paddingTop: 2, minHeight: '100%' }}>
                    {this.state.jobs.map((job, key) => this.getJobListItem(job, key))}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    jobList_item: {
        width: Layout.window.width - 4,
        height: (Layout.window.width - 4) * (1 / 3),
        backgroundColor: Colors.white1,
        flex: 1,
    },
    jobList_item_top: {
        flex: 1,
    },
    jobList_item_inner: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    plus: {
        fontSize: 30,
        marginTop: 5,
        color: Colors.white1,
        marginRight: 20,
    },
    image: {
        width: (Layout.window.width - 4) * (1 / 3) * 0.7,
        height: (Layout.window.width - 4) * (1 / 3) * 0.7,
        borderRadius: (Layout.window.width - 4) * (1 / 3) * 0.35,
    },
    text1: {
        fontFamily: 'os bold',
        fontSize: 20,
        color: Colors.black2,
    },
    text2: {
        fontFamily: 'os',
        color: Colors.black2,
    },
    text3: {
        alignSelf: 'flex-end',
        fontFamily: 'os bold',
        color: Colors.red1,
    },
});

JobList.propTypes = {
    navigation: PropTypes.object.isRequired,
};
