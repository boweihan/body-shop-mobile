import * as firebase from 'firebase';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    TouchableHighlight,
    Text,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import NavBar from '../components/NavBar';

export default class BidDetail extends Component {
    render() {
        return (
            <View style={styles.bidDetail}>
                <NavBar
                    title="Bid Detail"
                    navigation={this.props.navigation}
                    rightButton={
                        <TouchableHighlight
                            underlayColor={Colors.red1}
                            activeOpacity={0.5}
                            onPress={() => this.props.navigation.navigate('JobList')}
                        >
                            <Feather
                                name="chevrons-left"
                                style={styles.back}
                            />
                        </TouchableHighlight>
                    }
                />
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
                        Accept Bid
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
        borderWidth: 5,
        borderColor: Colors.white1,
    },
    bidDetail_buttonText: {
        textAlign: 'center',
        color: Colors.white1,
        lineHeight: 50,
        fontFamily: 'os bold',
        fontSize: 16,
    },
    back: {
        fontSize: 30,
        marginTop: 5,
        color: Colors.white1,
        marginRight: 20,
    },
});

BidDetail.propTypes = {
    navigation: PropTypes.object.isRequired,
};
