import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'Links',
    };

    render() {
        return (
            <View style={styles.container}>
                {/* Go ahead and delete ExpoLinksView and replace it with your
                   * content, we just wanted to provide you with some helpful links */}
                <Text>Boop</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});