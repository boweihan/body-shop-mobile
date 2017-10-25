import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

class MonoText extends React.Component {
    render() {
        return (
            <Text
                {...this.props}
                style={[this.props.style, { fontFamily: 'space-mono' }]}
            />
        );
    }
}

MonoText.propTypes = {
    style: PropTypes.number,
};

export default MonoText;
