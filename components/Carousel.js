// https://blog.binoy.io/simple-carousel-in-react-native-ae71cac279de

import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';

export default class Carousel extends React.Component {
    render() {
        const { images } = this.props;
        if (images && images.length) {
            return (
                <View
                    style={styles.scrollContainer}
                >
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                    >
                        {images.map((image, index) => (
                            <Image // NOTE: don't use index as keys, fix later
                                key={index} // eslint-disable-line
                                style={styles.image}
                                source={{ uri: `data:image/jpg;base64, ${image}` }}
                            >
                                {this.props.children}
                                <MaterialCommunityIcons
                                    name="dots-horizontal"
                                    style={styles.bars}
                                />
                            </Image>
                        ))}
                    </ScrollView>
                </View>
            );
        }
        console.log('Please provide images');
        return null;
    }
}

const styles = StyleSheet.create({
    scrollContainer: {
        height: '100%',
    },
    image: {
        width: Layout.window.width,
        height: '100%',
        justifyContent: 'flex-end',
    },
    bars: {
        alignSelf: 'center',
        fontSize: 50,
        marginBottom: 0,
        backgroundColor: 'transparent',
        color: Colors.white1,
    },
});

Carousel.propTypes = {
    images: PropTypes.array.isRequired,
    children: PropTypes.object,
};
