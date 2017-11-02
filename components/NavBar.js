import NavigationBar from 'react-native-navbar';
import React from 'react';
import { View, Modal, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

class NavBar extends React.Component {
    state = {
        visible: false,
    }
    _navigate = (route) => {
        this.props.navigation.navigate(route);
        this.setState({
            visible: !this.state.visible,
        });
    };
    render() {
        const leftButtonConfig = (
            <TouchableHighlight
                underlayColor={Colors.red1}
                activeOpacity={0.5}
                onPress={() => this.setState({ visible: !this.state.visible })}
            >
                <Feather
                    name="menu"
                    style={styles.hamburger}
                />
            </TouchableHighlight>
        );
        const titleConfig = {
            title: this.props.title,
            style: {
                color: Colors.white1,
                fontFamily: 'os bold',
                fontSize: 16,
            },
        };
        return (
            <View style={styles.container}>
                <NavigationBar
                    containerStyle={styles.navBar_container}
                    title={titleConfig}
                    leftButton={leftButtonConfig}
                    rightButton={this.props.rightButton}
                />
                <Modal
                    visible={this.state.visible}
                    onRequestClose={() => {}}
                    animationType="fade"
                    transparent={true} // eslint-disable-line
                >
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.modal}>
                            <TouchableHighlight
                                underlayColor={Colors.red1}
                                style={styles.cancel}
                                onPress={() => this.setState({ visible: !this.state.visible })}
                            >
                                <Feather
                                    name="x"
                                    style={styles.hamburger}
                                />
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={Colors.red1} style={styles.modal_item} onPress={() => this._navigate('Upload')}>
                                <Text style={styles.modal_item_text}>Post a Job</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={Colors.red1} style={styles.modal_item} onPress={() => this._navigate('JobList')}>
                                <Text style={styles.modal_item_text}>My Jobs</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={Colors.red1} style={styles.modal_item} onPress={() => this._navigate('Home')}>
                                <Text style={styles.modal_item_text}>My Profile</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={Colors.red1} style={styles.modal_item} onPress={() => this._navigate('Home')}>
                                <Text style={[styles.modal_item_text, { fontSize: 14 }]}>Logout</Text>
                            </TouchableHighlight>
                        </View>
                        <TouchableHighlight
                            underlayColor={Colors.black2}
                            onPress={() => this.setState({ visible: !this.state.visible })}
                            style={{ flex: 1, opacity: 0.5 }}
                        >
                            <View style={{ flex: 1, backgroundColor: Colors.black2, opacity: 0.5 }} />
                        </TouchableHighlight>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = {
    navBar_container: {
        backgroundColor: Colors.red1,
    },
    modal: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: Colors.red1,
    },
    modal_item: {
        height: 60,
        width: Layout.window.width * 0.7,
        borderBottomWidth: 1,
        borderBottomColor: Colors.white1,
    },
    cancel: {
        height: 40,
        marginTop: 20,
        alignSelf: 'flex-start',
    },
    cancel_text: {
        color: Colors.white1,
        textAlign: 'center',
        lineHeight: 40,
        fontSize: 16,
        fontFamily: 'os extra bold',
    },
    modal_item_text: {
        color: Colors.white1,
        marginLeft: 20,
        lineHeight: 60,
        fontSize: 16,
        fontFamily: 'os bold',
    },
    hamburger: {
        fontSize: 30,
        marginTop: 5,
        color: Colors.white1,
        marginLeft: 20,
    },
};

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired,
    rightButton: PropTypes.object,
};

export default NavBar;
