import React from 'react';
import {connect} from 'react-redux'
import {StyleSheet, ScrollView, Text, Alert} from 'react-native';
import Row from '../components/Row';
import * as actions from '../actions';
import { PURGE } from 'redux-persist';
import { purgeStoredState } from 'redux-persist'
import * as selectors from '../reducers/selectors'


class Personal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {clean, identity} = this.props;
        return (
            <ScrollView style={styles.container}>
                <Row title={'Clean'} onPress={() => clean()}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

function mapStateToProps(state) {
    return {
        identity: selectors.keystore(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        clean: () => dispatch({
            type: PURGE,
            key: "root",
            result: () => null
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Personal);