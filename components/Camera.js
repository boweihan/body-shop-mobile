// https://github.com/expo/camerja/blob/master/App.js
import { Camera, FileSystem } from 'expo';
import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import Gallery from './Gallery';
import Colors from '../constants/Colors';

export default class CameraComponent extends React.Component {
    state = {
        zoom: 0,
        type: 'back',
        showGallery: false,
    };

    toggleView = () => {
        this.setState({
            showGallery: !this.state.showGallery,
        });
    }

    toggleFacing = () => {
        this.setState({
            type: this.state.type === 'back' ? 'front' : 'back',
        });
    }

    zoomOut = () => {
        this.setState({
            zoom: this.state.zoom - 0.1 < 0 ? 0 : this.state.zoom - 0.1,
        });
    }

    zoomIn = () => {
        this.setState({
            zoom: this.state.zoom + 0.1 > 1 ? 1 : this.state.zoom + 0.1,
        });
    }

    takePicture = async () => {
        if (this.camera) {
            const photo = await this.camera.takePictureAsync();
            const file = await FileSystem.getInfoAsync(photo.uri);
            console.log(file);
            this.props.addPicture(file);
        }
    };

    renderGallery() {
        return <Gallery onPress={this.toggleView} />;
    }

    renderCamera() {
        return (
            <Camera
                ref={(ref) => { this.camera = ref; }}
                style={{ flex: 1 }}
                type={this.state.type}
                zoom={this.state.zoom}
            >
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                    }}
                >
                    <TouchableOpacity
                        style={styles.flipButton}
                        onPress={this.toggleFacing}
                    >
                        <MaterialIcons
                            name="flip-to-front"
                            style={styles.flipButton_icon}
                        />
                    </TouchableOpacity>
                    <View style={{ flex: 5 }} />
                    <TouchableOpacity
                        style={styles.flipButtonRight}
                        onPress={this.props.returnToForm}
                    >
                        <MaterialIcons
                            name="arrow-back"
                            style={styles.flipButton_icon}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                    }}
                >
                    <TouchableOpacity
                        style={styles.zoomButton}
                        onPress={this.zoomIn}
                    >
                        <MaterialIcons
                            name="zoom-in"
                            style={styles.flipButton_icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.zoomButton}
                        onPress={this.zoomOut}
                    >
                        <MaterialIcons
                            name="zoom-out"
                            style={styles.flipButton_icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.flipButton,
                            styles.picButton,
                        ]}
                        onPress={this.takePicture}
                    >
                        <MaterialCommunityIcons
                            name="circle-outline"
                            style={styles.flipButton_icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.flipButton,
                            styles.galleryButton,
                        ]}
                        onPress={this.toggleView}
                    >
                        <Ionicons
                            name="md-photos"
                            style={styles.flipButton_icon}
                        />
                    </TouchableOpacity>
                </View>
            </Camera>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.showGallery ? this.renderGallery() : this.renderCamera()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white1,
    },
    zoomButton: {
        flex: 0.5,
        margin: 20,
        backgroundColor: Colors.black1,
    },
    flipButton: {
        flex: 1,
        margin: 20,
        backgroundColor: Colors.black1,
    },
    flipButtonRight: {
        flex: 1,
        margin: 20,
        backgroundColor: Colors.black1,
    },
    flipButton_icon: {
        fontSize: 30,
        color: Colors.white1,
    },
});

CameraComponent.propTypes = {
    addPicture: PropTypes.func.isRequired,
    returnToForm: PropTypes.func.isRequired,
};
