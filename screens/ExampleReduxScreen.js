import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions';

class ExampleReduxScreen extends React.Component {
    render() {
        return (
            <View />
        );
    }
}

// Let component fire action events
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

// Let redux state propagate into components. If redux state changes then
// we want the app state to change
function mapStateToProps(state) {
    return {
        level: state.level,
        highestLevel: state.highestLevel,
    };
}

// Connect mapping functions to component
export default connect(mapStateToProps, mapDispatchToProps)(ExampleReduxScreen);
