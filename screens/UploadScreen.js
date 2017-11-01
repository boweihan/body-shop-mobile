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
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

export default class UploadForm extends Component {
    state = {
        text: 'field',
    }

    render() {
        return (
            <View style={styles.uploadForm}>
                <View style={styles.uploadForm_images}>
                    
                </View>
                <View style={styles.uploadForm_form}>
                    <View style={styles.uploadForm_form_cell}>
                        <TextInput
                            style={styles.uploadForm_form_cellText}
                            // onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                        />
                        <TextInput
                            style={styles.uploadForm_form_cellText}
                            value={this.state.text}
                        />
                    </View>
                    <View style={styles.uploadForm_form_cell}>
                        <TextInput
                            style={styles.uploadForm_form_cellText}
                            value={this.state.text}
                        />
                    </View>
                    <View style={styles.uploadForm_form_cell}>
                        <TextInput
                            style={styles.uploadForm_form_cellText}
                            value={this.state.text}
                        />
                    </View>
                    <View style={styles.uploadForm_form_cell}>
                        <TextInput
                            style={styles.uploadForm_form_cellText}
                            value={this.state.text}
                        />
                    </View>
                    <View style={styles.uploadForm_form_cell}>
                        <TextInput
                            style={styles.uploadForm_form_cellText}
                            value={this.state.text}
                        />
                        <TextInput
                            style={styles.uploadForm_form_cellText}
                            value={this.state.text}
                        />
                    </View>
                </View>
                <TouchableHighlight
                    underlayColor={Colors.red1}
                    activeOpacity={0.5}
                    style={styles.uploadForm_button}
                    onPress={() => this.props.navigation.navigate('Home')}
                    accessibilityLabel="accept the bid and begin process"
                >
                    <Text style={styles.uploadForm_buttonText}>
                        SUBMIT
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
        padding: 20,
        borderWidth: 1,
        borderColor: Colors.gray2,
        height: '100%',
    },
    uploadForm_button: {
        backgroundColor: Colors.red1,
        width: '100%',
        height: 60,
    },
    uploadForm_buttonText: {
        textAlign: 'center',
        color: Colors.white1,
        fontWeight: '600',
        lineHeight: 60,
    },
});

UploadForm.propTypes = {
    navigation: PropTypes.object.isRequired,
};
