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
import { FontAwesome, Feather } from '@expo/vector-icons';
import { Permissions, ImagePicker } from 'expo';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import NavBar from '../components/NavBar';
import Carousel from '../components/Carousel';

export default class UploadForm extends Component {
    state = {
        hasCameraPermission: null,
        pictures: [],
        form: {
            firstName: '',
            lastName: '',
            email: '',
            location: '',
            model: '',
            make: '',
            year: '',
        },
    }

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    handleSubmit = () => {
        const user = firebase.auth().currentUser;
        const newJobKey = firebase.database().ref().child('jobs').push().key;
        const updates = {};
        updates[`/jobs/${newJobKey}`] = { ...this.state.form, pictures: this.state.pictures };
        updates[`/users/${user.uid}/jobs/${newJobKey}`] = { ...this.state.form, pictures: this.state.pictures };
        firebase.database().ref().update(updates).done(() => {
            this.props.navigation.navigate('JobList');
        });
    }

    _isDisabled = () => {
        if (this.state.pictures.length < 1) {
            return true;
        }
        const values = Object.values(this.state.form);
        for (let i = 0; i < values.length; i += 1) {
            if (!values[i]) {
                return true;
            }
        }
        return false;
    }

    addPicture = (blob) => {
        const { pictures } = this.state;
        pictures.push(blob);
        this.setState({ pictures });
    }

    updateForm = (partialForm) => {
        const { form } = this.state;
        const newForm = Object.assign(form, partialForm);
        this.setState({ form: newForm });
    }

    _pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
            base64: true,
        });

        if (!result.cancelled) {
            // firebase storage doesn't work at the moment, so we store everything in the db
            // We want to use firebase storage as soon as Expo can support blobs
            // Uploader.uploadAsByteArray(Uploader.convertToByteArray(result.base64), (progress) => {
            //     console.log(progress);
            // });
            this.addPicture(result.base64);
        }
    };

    render() {
        const disabled = this._isDisabled();
        const { hasCameraPermission } = this.state;
        return (
            <View style={styles.uploadForm}>
                <NavBar
                    title="Post Job"
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
                <View style={styles.uploadForm_images}>
                    <View style={{ flex: 1 }} />
                    {this.state.pictures.length > 0 ?
                        <Carousel style={{ flex: 1 }} images={this.state.pictures}>
                            <TouchableHighlight
                                underlayColor="transparent"
                                activeOpacity={0.5}
                                onPress={() => this._pickImage()}
                            >
                                <FontAwesome
                                    name="plus"
                                    style={styles.smallCamera}
                                />
                            </TouchableHighlight>
                        </Carousel> :
                        <View style={styles.uploadForm_image}>
                            {hasCameraPermission && this.state.pictures.length < 1 ?
                                <TouchableHighlight
                                    underlayColor="transparent"
                                    activeOpacity={0.5}
                                    onPress={() => this._pickImage()}
                                >
                                    <FontAwesome
                                        name="camera"
                                        style={styles.camera}
                                    />
                                </TouchableHighlight>
                                :
                                <FontAwesome
                                    name="remove"
                                    style={styles.camera}
                                />
                            }
                        </View>
                    }
                    <View style={{ flex: 1 }} />
                </View>
                <View style={styles.uploadForm_form}>
                    <View style={styles.uploadForm_form_cell}>
                        <TextInput
                            style={styles.uploadForm_form_cellText}
                            onChangeText={firstName => this.updateForm({ firstName })}
                            value={this.state.form.firstName}
                            placeholder="First Name"
                        />
                        <TextInput
                            style={styles.uploadForm_form_cellText}
                            onChangeText={lastName => this.updateForm({ lastName })}
                            value={this.state.form.lastName}
                            placeholder="Last Name"
                        />
                    </View>
                    <View style={styles.uploadForm_form_cell}>
                        <TextInput
                            style={styles.uploadForm_form_cellText}
                            onChangeText={email => this.updateForm({ email })}
                            value={this.state.form.email}
                            placeholder="Email"
                        />
                    </View>
                    <View style={styles.uploadForm_form_cell}>
                        <TextInput
                            style={styles.uploadForm_form_cellText}
                            onChangeText={location => this.updateForm({ location })}
                            value={this.state.form.location}
                            placeholder="Location"
                        />
                    </View>
                    <View style={styles.uploadForm_form_cell}>
                        <TextInput
                            style={styles.uploadForm_form_cellText}
                            onChangeText={make => this.updateForm({ make })}
                            value={this.state.form.make}
                            placeholder="Vehicle Make"
                        />
                    </View>
                    <View style={styles.uploadForm_form_cell}>
                        <TextInput
                            style={styles.uploadForm_form_cellText}
                            onChangeText={model => this.updateForm({ model })}
                            value={this.state.form.model}
                            placeholder="Model"
                        />
                        <TextInput
                            style={styles.uploadForm_form_cellText}
                            onChangeText={year => this.updateForm({ year })}
                            value={this.state.form.year}
                            placeholder="Year"
                        />
                    </View>
                </View>
                <TouchableHighlight
                    disabled={disabled}
                    underlayColor={Colors.red1}
                    activeOpacity={0.5}
                    style={disabled ? styles.uploadForm_button_disabled : styles.uploadForm_button}
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
    smallCamera: {
        color: Colors.white1,
        backgroundColor: 'transparent',
        alignSelf: 'flex-end',
        fontSize: 30,
        marginRight: 10,
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
        paddingLeft: 30,
        paddingRight: 30,
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
    uploadForm_button_disabled: {
        backgroundColor: Colors.red1,
        width: Layout.window.width,
        height: 60,
        opacity: 0.5,
    },
    uploadForm_buttonText: {
        textAlign: 'center',
        color: Colors.white1,
        lineHeight: 60,
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

UploadForm.propTypes = {
    navigation: PropTypes.object.isRequired,
};
