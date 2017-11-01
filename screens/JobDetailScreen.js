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

export default class JobDetail extends Component {
    render() {
        return (
            <View style={styles.jobDetail}>
                <View style={styles.jobDetail_images}>
                    
                </View>
                <View style={styles.jobDetail_ownerInfo}>
                  
                </View>
                <View style={styles.jobDetail_carInfo}>
                  
                </View>
                <TouchableHighlight
                    underlayColor={Colors.red1}
                    activeOpacity={0.5}
                    style={styles.jobDetail_button}
                    onPress={() => this.props.navigation.navigate('Home')}
                    accessibilityLabel="Update info"
                >
                    <Text style={styles.jobDetail_buttonText}>
                        REVISE
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    jobDetail: {
        flex: 1,
    },
    jobDetail_images: {
        flex: 2,
    },
    jobDetail_ownerInfo: {
        flex: 1,
        backgroundColor: Colors.white1,
    },
    jobDetail_carInfo: {
        flex: 1,
        backgroundColor: Colors.white1,
    },
    jobDetail_button: {
        backgroundColor: Colors.red1,
        width: '100%',
        height: 60,
    },
    jobDetail_buttonText: {
        textAlign: 'center',
        color: Colors.white1,
        fontWeight: '600',
        lineHeight: 60,
    },
});

JobDetail.propTypes = {
    navigation: PropTypes.object.isRequired,
};
