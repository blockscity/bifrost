import React from 'react';
import {connect} from 'react-redux'
import {StyleSheet, View, Text} from 'react-native';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as actions from '../actions';
import * as selectors from '../reducers/selectors'

class Mnemonic extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {createIdentity, password, confirmed} = this.props;
        return (
            <View style={styles.container}>
               <Text></Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
});

function mapStateToProps(state) {
    return {
        keystore: selectors.keystore(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createKeystore: (password) => actions.keystore({
            password: password
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mnemonic);