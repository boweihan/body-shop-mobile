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

export default class BidDetail extends Component {
    render() {
        return (
            <View style={styles.bidDetail}>
                <View style={styles.bidDetail_images}>
                    
                </View>
                <View style={styles.bidDetail_shopInfo}>
                  
                </View>
                <View style={styles.bidDetail_lineItems}>
                  
                </View>
                <TouchableHighlight
                    underlayColor={Colors.red1}
                    activeOpacity={0.5}
                    style={styles.bidDetail_button}
                    onPress={() => this.props.navigation.navigate('Home')}
                    accessibilityLabel="accept the bid and begin process"
                >
                    <Text style={styles.bidDetail_buttonText}>
                        PROCEED WITH BID
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bidDetail: {
        flex: 1,
    },
    bidDetail_images: {
        flex: 2,
    },
    bidDetail_shopInfo: {
        flex: 1,
        backgroundColor: Colors.white1,
    },
    bidDetail_lineItems: {
        flex: 1,
        backgroundColor: Colors.white1,
    },
    bidDetail_button: {
        backgroundColor: Colors.red1,
        width: '100%',
        height: 60,
    },
    bidDetail_buttonText: {
        textAlign: 'center',
        color: Colors.white1,
        fontWeight: '600',
        lineHeight: 60,
    },
});

BidDetail.propTypes = {
    navigation: PropTypes.object.isRequired,
};
