import React from 'react';
import {
    Image,
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import { FileSystem } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

export default class Gallery extends React.Component {
    state = {
        photos: [],
    };

    componentDidMount() {
        FileSystem.readDirectoryAsync(
            `${FileSystem.documentDirectory}photos`,
        ).then((photos) => {
            this.setState({
                photos,
            });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View
                    style={{
                        flex: 0.1,
                        flexDirection: 'row',
                    }}
                >
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={this.props.returnToForm}
                    >
                        <MaterialIcons
                            name="arrow-back"
                            style={styles.backButton_icon}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView contentComponentStyle={{ flex: 1 }}>
                    <View style={styles.pictures}>
                        {this.state.photos.map(photoUri =>
                            (
                                <Image
                                    style={styles.picture}
                                    source={{
                                        uri: `${FileSystem.documentDirectory}photos/${photoUri}`,
                                    }}
                                    key={photoUri}
                                />
                            ),
                        )}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: Colors.black1,
    },
    pictures: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: Colors.white1,
    },
    picture: {
        width: Layout.window.width * 0.3,
        height: Layout.window.width * 0.3,
        margin: Layout.window.width * (0.1 / 6),
        resizeMode: 'contain',
    },
    backButton: {
        flex: 1,
        margin: 20,
    },
    backButton_icon: {
        fontSize: 30,
        color: Colors.white1,
    },
});

Gallery.propTypes = {
    addPicture: PropTypes.func.isRequired,
    returnToForm: PropTypes.func.isRequired,
};
