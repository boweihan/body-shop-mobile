import * as firebase from 'firebase';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    TouchableHighlight,
    Text,
    TextInput,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import NavBar from '../components/NavBar';

export default class UploadForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        location: '',
        model: '',
        make: '',
        year: '',
    }

    handleSubmit = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={styles.uploadForm}>
                <NavBar title="Post Job" navigation={this.props.navigation} />
                <View style={styles.uploadForm_images}>
                    <View style={{ flex: 1 }} />
                    <View style={styles.uploadForm_image}>
                        <FontAwesome
                            name="camera"
                            style={styles.camera}
                        />
                    </View>
                    <View style={{ flex: 1 }} />
                </View>
                <View style={styles.uploadForm_form}>
                    <View style={styles.uploadForm_form_cell}>
                        <TextInput
                            style={styles.uploadForm_form_cellText}
                            onChangeText={firstName => this.setState({ firstName })}
                            value={this.state.firstName}
                            placeholder="First Name"
                        />
                        <TextInput
                            style={styles.uploadForm_form_cellText}
                            onChangeText={lastName => this.setState({ lastName })}
                            value={this.state.lastName}
                            placeholder="Last Name"
                        />
                    </View>
                    <View style={styles.uploadForm_form_cell}>
                        <TextInput
                            style={styles.uploadForm_form_cellText}
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                            placeholder="Email"
                        />
                    </View>
                    <View style={styles.uploadForm_form_cell}>
                        <TextInput
                            style={styles.uploadForm_form_cellText}
                            onChangeText={location => this.setState({ location })}
                            value={this.state.location}
                            placeholder="Location"
                        />
                    </View>
                    <View style={styles.uploadForm_form_cell}>
                        <TextInput
                            style={styles.uploadForm_form_cellText}
                            onChangeText={make => this.setState({ make })}
                            value={this.state.make}
                            placeholder="Vehicle Make"
                        />
                    </View>
                    <View style={styles.uploadForm_form_cell}>
                        <TextInput
                            style={styles.uploadForm_form_cellText}
                            onChangeText={model => this.setState({ model })}
                            value={this.state.model}
                            placeholder="Model"
                        />
                        <TextInput
                            style={styles.uploadForm_form_cellText}
                            onChangeText={year => this.setState({ year })}
                            value={this.state.year}
                            placeholder="Year"
                        />
                    </View>
                </View>
                <TouchableHighlight
                    underlayColor={Colors.red1}
                    activeOpacity={0.5}
                    style={styles.uploadForm_button}
                    onPress={() => this.handleSubmit()}
                    accessibilityLabel="accept the bid and begin process"
                >
                    <Text style={styles.uploadForm_buttonText}>
                        Submit
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    uploadForm: {
        flex: 1,
    },
    uploadForm_images: {
        flex: 1,
        backgroundColor: Colors.red1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    uploadForm_image: {
        backgroundColor: Colors.white1,
        borderRadius: 20,
        width: '40%',
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    camera: {
        color: Colors.red1,
        fontSize: 40,
    },
    uploadForm_form: {
        flex: 2,
        backgroundColor: Colors.white1,
    },
    uploadForm_form_cell: {
        flex: 1,
        flexDirection: 'row',
    },
    uploadForm_form_cellText: {
        flex: 1,
        padding: 30,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: Colors.gray2,
        height: '100%',
        fontFamily: 'os bold',
    },
    uploadForm_button: {
        backgroundColor: Colors.red1,
        width: Layout.window.width,
        height: 60,
    },
    uploadForm_buttonText: {
        textAlign: 'center',
        color: Colors.white1,
        lineHeight: 60,
        fontFamily: 'os extra bold',
        fontSize: 16,
    },
});

UploadForm.propTypes = {
    navigation: PropTypes.object.isRequired,
};
