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
                    animationType="slide"
                >
                    <View style={styles.modal}>
                        <TouchableHighlight style={styles.modal_item} onPress={() => this._navigate('Home')}>
                            <Text style={styles.modal_item_text}>HOME</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.modal_item} onPress={() => this._navigate('JobList')}>
                            <Text style={styles.modal_item_text}>JOBS</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.modal_item} onPress={() => this._navigate('Home')}>
                            <Text style={styles.modal_item_text}>LOGOUT</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.cancel} onPress={() => this.setState({ visible: !this.state.visible })}>
                            <Text style={styles.cancel_text}>CANCEL</Text>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal_item: {
        height: 60,
        width: Layout.window.width - 10,
        backgroundColor: Colors.red1,
        margin: 5,
    },
    cancel: {
        height: 40,
        width: Layout.window.width - 10,
        backgroundColor: Colors.black1,
        margin: 5,
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
        textAlign: 'center',
        lineHeight: 60,
        fontSize: 16,
        fontFamily: 'os extra bold',
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
